-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Jan 13, 2018 at 02:27 AM
-- Server version: 5.5.42
-- PHP Version: 5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `courseapp_sails`
--
CREATE DATABASE IF NOT EXISTS `courseapp_sails` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `courseapp_sails`;

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `userName` varchar(255) DEFAULT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`userName`, `salt`, `password`, `id`, `createdAt`, `updatedAt`) VALUES
('admin@shaban.com', 'wIG+eJmGKY0gKT/sM+F77g==', 'xpGOLw2jNUZwGbsmy6mMhVACQMnX4L2bDN6uSXyci/+/wYNJJNdmhOJqM3n8kkbrLjKvLl/evt/WA7nRInDyCQ==', 1, '2018-01-11 18:37:01', '2018-01-11 18:37:02'),
('karan', 'a3PoE2mGkjusphqJ9TYqiw==', 'Xaky4XrINHuCKL1Vd1FBMnipQNj4xUgI0o7bUTCAnGyMCBwRSSxw8QazFEYf4wE18+kjrcA5rHp7diysK4WJaA==', 2, '2018-01-11 18:45:19', '2018-01-11 18:45:19');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
CREATE TABLE `course` (
  `name` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `parent` int(11) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`name`, `desc`, `parent`, `id`, `createdAt`, `updatedAt`) VALUES
('BIO-001: Biology Basics', NULL, 0, 1, '2018-01-12 01:46:11', '2018-01-12 07:58:53'),
('Week-1', NULL, 1, 2, '2018-01-12 02:00:41', '2018-01-12 07:48:24'),
('Week-1', NULL, 13, 14, '2018-01-12 04:19:14', '2018-01-12 04:19:14'),
('Week-2', NULL, 13, 15, '2018-01-12 04:19:20', '2018-01-12 04:19:20'),
('Sprint-1', NULL, 24, 25, '2018-01-12 04:44:51', '2018-01-12 04:44:51'),
('Sprint-2', NULL, 24, 26, '2018-01-12 04:44:57', '2018-01-12 04:44:57'),
('Day-1', NULL, 2, 27, '2018-01-12 07:57:15', '2018-01-12 07:57:15'),
('CSI-518: Software Engineering', NULL, 0, 28, '2018-01-12 07:58:30', '2018-01-12 07:58:30'),
('Team Project', NULL, 28, 30, '2018-01-12 07:59:24', '2018-01-12 07:59:24'),
('Term Project', NULL, 28, 31, '2018-01-12 07:59:32', '2018-01-12 07:59:32'),
('Labs', NULL, 28, 32, '2018-01-12 07:59:37', '2018-01-12 07:59:37'),
('Quiz', NULL, 28, 33, '2018-01-12 07:59:44', '2018-01-12 07:59:44'),
('ENG-007: English Language', NULL, 0, 34, '2018-01-12 08:05:06', '2018-01-12 08:05:32'),
('Week-1', NULL, 34, 35, '2018-01-12 08:05:47', '2018-01-12 08:05:47'),
('Week-2', NULL, 34, 36, '2018-01-12 08:05:52', '2018-01-12 08:05:52'),
('Extra Class', NULL, 34, 37, '2018-01-12 08:06:01', '2018-01-12 08:06:01'),
('Day-1: Introduction', NULL, 35, 38, '2018-01-12 08:07:01', '2018-01-12 08:07:01'),
('Day-2: Reading in Practice', NULL, 35, 39, '2018-01-12 08:07:33', '2018-01-12 08:07:33'),
('Noon Class', NULL, 38, 41, '2018-01-12 08:31:58', '2018-01-12 08:31:58'),
('Work Shop', NULL, 28, 43, '2018-01-13 02:26:20', '2018-01-13 02:26:20');

-- --------------------------------------------------------

--
-- Table structure for table `document`
--

DROP TABLE IF EXISTS `document`;
CREATE TABLE `document` (
  `lecture` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `document`
--

INSERT INTO `document` (`lecture`, `title`, `url`, `order`, `id`, `createdAt`, `updatedAt`) VALUES
(21, 'PDF File', '/files/cbab16a3-ba2a-4143-881e-a8dfa5180535.pdf', 1, 4, '2018-01-13 01:36:54', '2018-01-13 01:36:54'),
(21, 'Image File', '/files/e87984f8-648b-40ae-92b7-d697364d3ec7.jpg', 2, 5, '2018-01-13 01:37:14', '2018-01-13 01:37:14');

-- --------------------------------------------------------

--
-- Table structure for table `lecture`
--

DROP TABLE IF EXISTS `lecture`;
CREATE TABLE `lecture` (
  `course` int(11) DEFAULT NULL,
  `serial_number` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `transcript_url` varchar(255) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lecture`
--

INSERT INTO `lecture` (`course`, `serial_number`, `description`, `transcript_url`, `id`, `createdAt`, `updatedAt`) VALUES
(1, 0, 'Introduction to Biology', '/files/97c4c9b9-f6dc-4b93-b1b1-32617ce52726.png', 15, '2018-01-12 07:54:27', '2018-01-12 07:54:27'),
(2, 0, 'Week-1: Overview', '/files/337ab0f1-27cd-479b-87d5-22bffb005d76.pdf', 17, '2018-01-12 07:57:32', '2018-01-12 07:57:32'),
(27, 0, 'Lesson-1', '/files/04f63114-e2e0-4879-a6ab-c4bd5e4100cb.png', 18, '2018-01-12 07:57:48', '2018-01-12 07:57:48'),
(28, 0, 'Syllabus', '/files/b0a36437-c430-4756-a63a-b01310c92888.pdf', 20, '2018-01-12 08:04:06', '2018-01-12 08:04:06'),
(34, 0, 'Syllabus', '/files/29e43494-2af5-42f9-bb81-b51b546fc584.pdf', 21, '2018-01-12 08:06:12', '2018-01-12 08:06:12'),
(34, 1, 'Some Exercise', '/files/f356eeec-46ac-41b7-9091-6a040c099afc.png', 22, '2018-01-12 08:06:31', '2018-01-12 08:06:31'),
(38, 0, 'Demo Video', '/files/60631b23-f780-44f6-844c-57859a47f992.png', 23, '2018-01-12 08:07:55', '2018-01-12 08:07:55'),
(41, 0, 'Class Exercise', '/files/704eda74-4565-4207-9483-3abbfb76fa55.pdf', 24, '2018-01-12 08:32:26', '2018-01-12 08:38:26'),
(34, 2, 'lect-2', '/files/e5ee11ff-c8f3-45fc-beef-4bc6e1f74ff3.pdf', 25, '2018-01-12 09:24:39', '2018-01-12 09:24:39'),
(28, 1, 'Final Exam', NULL, 26, '2018-01-13 02:26:05', '2018-01-13 02:26:05'),
(43, 0, 'W-1', '/files/c3204aa2-a2d1-4d58-9116-1ab896c76585.png', 27, '2018-01-13 02:26:28', '2018-01-13 02:26:36');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages` (
  `content` longtext,
  `author` varchar(255) DEFAULT NULL,
  `group` int(11) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `phone` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`firstName`, `lastName`, `phone`, `createdAt`, `updatedAt`) VALUES
('Ming', 'Ying', '1234567', '2016-11-07 13:46:10', '2016-11-07 13:46:12'),
('James', 'Bond', '5555555', '2016-11-08 21:28:19', '2016-11-08 21:28:20');

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

DROP TABLE IF EXISTS `video`;
CREATE TABLE `video` (
  `lecture` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `order` int(11) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `video`
--

INSERT INTO `video` (`lecture`, `title`, `url`, `order`, `id`, `createdAt`, `updatedAt`) VALUES
(23, 'LD+ Demo', '/files/16d21d67-dd10-4328-86cb-ea1fc2e11edc.mp4', 0, 9, '2018-01-12 08:08:43', '2018-01-12 08:09:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `userName` (`userName`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `document`
--
ALTER TABLE `document`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lecture`
--
ALTER TABLE `lecture`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`phone`);

--
-- Indexes for table `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=44;
--
-- AUTO_INCREMENT for table `document`
--
ALTER TABLE `document`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `lecture`
--
ALTER TABLE `lecture`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `video`
--
ALTER TABLE `video`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
