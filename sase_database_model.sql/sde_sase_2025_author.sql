-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: sde_sase_2025
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `author`
--

DROP TABLE IF EXISTS `author`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `author` (
  `author_id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `website` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`author_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `author`
--

LOCK TABLES `author` WRITE;
/*!40000 ALTER TABLE `author` DISABLE KEYS */;
INSERT INTO `author` VALUES (1,'Mary Wollstonecraft Shelley','https://en.wikipedia.org/wiki/Mary_Shelley','2025-04-27 20:05:25',NULL,NULL),(2,'Mark Twain','https://en.wikipedia.org/wiki/Mark_Twain','2025-04-27 20:05:25',NULL,NULL),(3,'Jane Austen','https://en.wikipedia.org/wiki/Jane_Austen','2025-04-27 20:05:25','2025-04-27 21:43:25',NULL),(4,'Charles Dickens','https://en.wikipedia.org/wiki/Charles_Dickens','2025-04-27 20:05:25',NULL,NULL),(5,'Leo Tolstoy','https://en.wikipedia.org/wiki/Leo_Tolstoy','2025-04-27 20:05:25',NULL,NULL),(6,'Fyodor Dostoevsky','https://en.wikipedia.org/wiki/Fyodor_Dostoevsky','2025-04-27 20:05:25',NULL,NULL),(7,'Oscar Wilde','https://en.wikipedia.org/wiki/Oscar_Wilde','2025-04-27 20:05:25',NULL,NULL),(8,'Herman Melville','https://en.wikipedia.org/wiki/Herman_Melville','2025-04-27 20:05:25',NULL,NULL),(9,'Edgar Allan Poe','https://en.wikipedia.org/wiki/Edgar_Allan_Poe','2025-04-27 20:05:25',NULL,NULL),(10,'J. K. Rowling','https://en.wikipedia.org/wiki/J._K._Rowling','2025-04-27 22:05:07','2025-04-27 23:18:17',NULL),(11,'rwasda','dasdsa','2025-04-27 22:13:18',NULL,'2025-04-27 22:13:21'),(12,'dsad','asd','2025-04-27 22:13:26',NULL,'2025-04-27 22:13:29'),(13,'kkml','km','2025-04-27 23:18:22',NULL,'2025-04-27 23:18:25');
/*!40000 ALTER TABLE `author` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-27 23:48:23
