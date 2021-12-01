-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: petyo3
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `street` varchar(100) DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `floorOrApartament` int(11) DEFAULT NULL,
  `province` varchar(100) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `postalCode` int(11) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `address_FK` (`userId`),
  CONSTRAINT `address_FK` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'38 E/ 115 y 116',NULL,NULL,'Buenos Aires','La Plata',1900,1),(2,'38 e/ 40 y 41',NULL,NULL,'','',0,2),(11,'Sarmiento Y Héctor fontana',1690,0,'Salta','tartagal',4560,4);
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `image` varchar(150) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Perros','perro.png',NULL,NULL),(2,'Gatos','gato.png',NULL,NULL),(3,'Aves','loro.png',NULL,NULL),(4,'Reptiles','reptil.png',NULL,NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `shipping` int(11) NOT NULL,
  `image` varchar(150) NOT NULL,
  `subcategoryId` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_FK` (`subcategoryId`),
  CONSTRAINT `products_FK` FOREIGN KEY (`subcategoryId`) REFERENCES `subcategories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Arnes',1335,5,'super arnes para dsdsdsd',0,'1636153811796_img_.png',2,NULL,'2021-11-25 21:09:06');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategories`
--

DROP TABLE IF EXISTS `subcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subcategories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `subcategories_FK` (`categoryId`),
  CONSTRAINT `subcategories_FK` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategories`
--

LOCK TABLES `subcategories` WRITE;
/*!40000 ALTER TABLE `subcategories` DISABLE KEYS */;
INSERT INTO `subcategories` VALUES (1,'Accesorios',1,NULL,NULL),(2,'Alimentos',1,NULL,NULL),(3,'prueba',2,'2021-11-28 04:33:53','2021-11-28 06:33:44'),(4,'prueba',4,'2021-11-28 06:25:15','2021-11-28 06:33:36'),(5,'prueba',3,'2021-11-28 06:28:44','2021-11-28 06:33:20'),(8,'Alimentacion',2,'2021-11-29 02:52:28','2021-11-29 02:52:28'),(9,'Accesorios',3,'2021-11-29 02:52:54','2021-11-29 02:52:54'),(10,'Alimentos',4,'2021-11-29 02:53:23','2021-11-29 02:53:23');
/*!40000 ALTER TABLE `subcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `telephone` varchar(40) NOT NULL,
  `namePet` varchar(50) DEFAULT NULL,
  `email` varchar(70) NOT NULL,
  `password` varchar(70) NOT NULL,
  `image` varchar(150) NOT NULL,
  `biography` varchar(500) NOT NULL,
  `rol` int(2) NOT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Juan','Doce','4150689',NULL,'juandoce@gmail.com','Hola12345','autoImage.png','hola',1,NULL,NULL),(2,'ema  ','doce','',NULL,'ema@mail.com','$2a$12$bZtz25njlPJkO3NHY2J61.fzXSL665mWiSoEwZNLRbJ8A34SLIChW','autoImage.png','',0,'2021-10-18 22:04:43','2021-10-19 00:33:31'),(3,'jose','de luca','',NULL,'jose@mail.com','$2a$12$8KLuPNt76yvhOoCeZ/OyjuKYw3mq05sLRSosseLWhFEMGnoosM9Mm','autoImage.png','',1,'2021-10-19 00:37:38','2021-10-19 00:37:38'),(4,'Matias','Minchaca','543873693494','ergbdf','matiasminchaca@gmail.com','$2a$12$7iF37lnzSa5TmG1sQ5RRUOy.h8SXwlbJ9AaTkewS9hQzG3H5h7XgG','autoImage.png','gcvjh',1,'2021-10-21 16:26:03','2021-11-26 23:28:25'),(5,'beds','v dsvs','',NULL,'matvddv@gmail.com','$2a$12$aTP6dDysw4zJF6WiHDxbAe.Y8/KQKAPcemruOR1PKJfqBlTh1MKuu','autoImage.png','',0,'2021-10-21 22:33:33','2021-10-21 22:33:33'),(6,'desc','sdvsd','','vssd','svdvs@gm.com','$2a$12$dZq6GAvyA72OsNzJya.byekXyUqU.Ak0cofYQmBdO20RVzasibVSi','autoImage.png','',0,'2021-11-03 19:14:23','2021-11-03 19:14:23'),(7,'cascd','dsvsd','','dsv sd','matiashaca@gmail.com','$2a$12$U9xEojgTmn8T57O0D2wtve16rULCtOn8aclRZaGGj3UhJp9mjd3Bm','autoImage.png','',0,'2021-11-04 19:28:02','2021-11-04 19:28:02'),(8,'vrevre','rfere','','rever','matica@gmail.com','$2a$12$foWYRFgM9n3b2VjxgQBswuL0jFZElPTegHpNkO5Y3s/NCZ3WovoqO','autoImage.png','',0,'2021-11-04 19:29:53','2021-11-04 19:29:53'),(9,'vrevre','rfere','','rever','matifewweca@gmail.com','$2a$12$XlBfmjFfkHRgWcUdU.h9luGTiwzxnNZuPsfHvly7qmcs92E2/xC8C','autoImage.png','',0,'2021-11-04 19:30:33','2021-11-04 19:30:33'),(10,'vrdvdf','vfdvdf','','vfddf','24433aca@gmail.com','$2a$12$CLD.XBBaXylpA9AiTQuvk.Dg5tx4ydluZB.jCuj8v.WodmbIYXLKq','autoImage.png','',0,'2021-11-04 19:31:25','2021-11-04 19:31:25'),(11,'wrcvwerd','wefcewf','','','matiasminchavredva@gmail.com','$2a$12$1W8WKM7qvU9qxXxA2QZKRugJojW81VqpGb3rUQEDfHuZ9KSBbsPby','autoImage.png','',0,'2021-11-05 20:40:36','2021-11-05 20:40:36');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'petyo3'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-01 18:02:01
