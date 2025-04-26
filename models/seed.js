const db = require('./db');
const fs = require('fs');
const path = require('path');

// Load JSON data
const coursesData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/courses.json')));
const instructorsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/instructors.json')));
const faqsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/faqs.json')));
const liveEventsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/liveEvents.json')));

// Static lookup tables
const categories = [ { name: "Certificate" }, { name: "Bachelor's" }, { name: "Master's" } ];
const topics = [ { name: "Frontend" }, { name: "Backend" }, { name: "UX" }, { name: "AI" }, { name: "Cybersecurity" }, { name: "DevOps" }, { name: "Data Science" } ];
const levels = [ { name: "Beginner" }, { name: "Intermediate" }, { name: "Advanced" } ];

async function seedDatabase() {
  try {
    console.log('Seeding database...');

    // Insert lookup tables
    categories.forEach(category => db.run(`INSERT INTO categories (name) VALUES (?)`, [category.name]));
    topics.forEach(topic => db.run(`INSERT INTO topics (name) VALUES (?)`, [topic.name]));
    levels.forEach(level => db.run(`INSERT INTO levels (name) VALUES (?)`, [level.name]));

    // Insert instructors
    instructorsData.instructors.forEach(instructor => {
      db.run(`INSERT INTO instructors (name, bio, image) VALUES (?, ?, ?)`, [
        instructor.name, instructor.bio, instructor.image
      ]);
    });

    // Insert courses
    coursesData.courses.forEach(course => {
      const categoryName = course.category;
      const topicName = course.topic;
      const levelName = course.level;
      const categoryId = categories.find(c => c.name === categoryName)?.id || (categoryName === "Certificate" ? 1 : categoryName === "Bachelor's" ? 2 : 3);
      const topicId = topics.find(t => t.name === topicName)?.id || 1;
      const levelId = levels.find(l => l.name === levelName)?.id || 1;

      const topicMap = {
        "Frontend": 1,
        "Backend": 2,
        "DevOps": 3,
        "Cybersecurity": 4,
        "UX": 5,
        "Data Science": 6,
        "AI": 7
      };
      
      const levelMap = {
        "Beginner": 1,
        "Intermediate": 2,
        "Advanced": 3
      };
      
      const categoryMap = {
        "Certificate": 1,
        "Bachelor's": 2,
        "Master's": 3
      };

      db.run('INSERT INTO Courses (TITLE, DESCRIPTION, CATEGORY_ID, TOPIC_ID, LEVEL_ID, DURATION, PRICE, INSTRUCTOR_ID, IMAGE) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
[
  course.title,
  course.description,
  categoryMap[course.category],
  topicMap[course.topic],
  levelMap[course.level],
  course.duration,
  course.price,
  course.instructorId,
  course.image
]);

    });

    // Insert FAQs
    faqsData.faqs.forEach(faq => {
      db.run(`INSERT INTO faqs (question, answer) VALUES (?, ?)`, [faq.question, faq.answer]);
    });

    // Insert Live Events
    liveEventsData.liveEvents.forEach(event => {
      db.run(`INSERT INTO liveEvents (title, description, date, instructor_id) VALUES (?, ?, ?, ?)`, [
        event.title, event.description, event.date, event.instructorId
      ]);
    });

    console.log('✅ Seeding complete!');
  } catch (err) {
    console.error('❌ Error seeding database:', err.message);
  }
}

seedDatabase();
