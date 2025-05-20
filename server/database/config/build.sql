BEGIN;

-- Drop existing tables (orders first because it depends on books)
DROP TABLE IF EXISTS orders, notes, books, admins;

-- Table: notes
CREATE TABLE notes (
  note_id SERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  is_new BOOLEAN DEFAULT true
);

-- Table: books
CREATE TABLE books (
  book_id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  cover_url TEXT,
  images TEXT[],
  category TEXT,
  price_usd NUMERIC,
  price_egp NUMERIC,
  language TEXT,
  pages INT,
  isbn TEXT,
  size_cm TEXT,
  size_inch TEXT
);


-- Table: orders
CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  phone TEXT NOT NULL,
  location TEXT NOT NULL,
  address TEXT NOT NULL,
  book_id INT REFERENCES books(book_id) ,
  quantity INT NOT NULL,
  notes TEXT,
  is_new BOOLEAN DEFAULT true

);

-- Table: admins
CREATE TABLE admins (
  admin_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  password TEXT NOT NULL
);




INSERT INTO books (title, cover_url, images, category, price_usd, price_egp, language, pages, isbn, size_cm, size_inch) VALUES
('JavaScript for Beginners', 'https://example.com/js-cover.jpg',
 ARRAY['https://example.com/js1.jpg', 'https://example.com/js2.jpg'],
 'Programming', 19.99, 620, 'English', 250, '978-1-1111-1111-1', '21x14.8', '8.3x5.8'),

('Learning Python', 'https://example.com/python-cover.jpg', 
ARRAY['https://example.com/py1.jpg', 'https://example.com/py2.jpg'], 
'Programming', 24.50, 760, 'English', 320, '978-2-2222-2222-2', '23x15.5', '9x6.1'),

('Palestinian History', 'https://example.com/history-cover.jpg', 
ARRAY['https://example.com/hist1.jpg'], 
'History', 15.00, 450, 'Arabic', 180, '978-3-3333-3333-3', '20x13', '7.9x5.1');


INSERT INTO notes (email, message) VALUES
('user1@example.com', 'Great selection of books!'),
('guest23@domain.com', 'When will the next sale be?'),
('reader@site.org', 'Loved the book on Palestinian history.');



INSERT INTO orders (username, phone, location, address, book_id, quantity, notes) VALUES
('Ali', '0599999991', 'Gaza', 'Al-Rimal Street', 1, 2, 'Call before delivery'),
('Sara', '0598888882', 'Rafah', 'Near Al-Awda Hospital', 2, 1, ''),
('Khaled', '0597777773', 'Khan Younis', 'Beside the mosque', 3, 3, 'Please pack in gift wrap');


INSERT INTO admins (name, password) VALUES
('admin', 'secret123');




COMMIT;
