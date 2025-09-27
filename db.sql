CREATE DATABASE IF NOT EXISTS chatdb;
USE chatdb;

CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sender VARCHAR(50) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (sender, message, created_at) VALUES
('Anonymous', 'Someone order Bornvita!!', '2025-09-27 11:35:00'),
('Anonymous', 'hahahahah!!', '2025-09-27 11:38:00'),
('Anonymous', 'I’m Excited For this Event! Ho-Ho', '2025-09-27 11:56:00'),
('You', 'Hi Guysss 👋', '2025-09-27 12:31:00'),
('Anonymous', 'Hello!', '2025-09-27 12:35:00'),
('Anonymous', 'Yessss!!!!!!!', '2025-09-27 12:42:00'),
('You', 'Maybe I am not attending this event!', '2025-09-27 13:36:00'),
('Abhay Shukla', 'We have Surprise For you!!', '2025-09-27 13:45:00');
