-- Categories Table
CREATE TABLE IF NOT EXISTS categories (
  category_id_id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
);

-- Topics Table
CREATE TABLE IF NOT EXISTS topics (
  topic_id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
);

-- Levels Table
CREATE TABLE IF NOT EXISTS levels (
  level_id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
);

-- Instructors Table
CREATE TABLE IF NOT EXISTS instructors (
  instructor_id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  bio TEXT,
  image TEXT
);

-- Courses Table
CREATE TABLE IF NOT EXISTS courses (
  courses_id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category_id INTEGER,
  topic_id INTEGER,
  level_id INTEGER,
  duration TEXT,
  price INTEGER,
  instructor_id INTEGER,
  image TEXT,
  FOREIGN KEY (category_id) REFERENCES categories(category_id),
  FOREIGN KEY (topic_id) REFERENCES topics(topic_id),
  FOREIGN KEY (level_id) REFERENCES levels(level_id),
  FOREIGN KEY (instructor_id) REFERENCES instructors(instructor_id)
);

-- Live Events Table
CREATE TABLE IF NOT EXISTS liveEvents (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  date TEXT,
  instructor_id INTEGER,
  FOREIGN KEY (instructor_id) REFERENCES instructors(id)
);

-- FAQs Table
CREATE TABLE IF NOT EXISTS faqs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  question TEXT NOT NULL,
  answer TEXT NOT NULL
);

-- Student Contacts Table
CREATE TABLE IF NOT EXISTS studentContacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
