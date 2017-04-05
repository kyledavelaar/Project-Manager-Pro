DROP DATABASE IF EXISTS user;
CREATE DATABASE user;

\c user;

CREATE TABLE user (
  username VARCHAR,
  password VARCHAR
);

INSERT INTO user (username, password)
  VALUES ('kyle', 'kyle');