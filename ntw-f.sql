-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Sam 30 Juin 2018 à 19:06
-- Version du serveur :  5.7.22-0ubuntu0.16.04.1
-- Version de PHP :  7.0.30-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `ntw-f`
--

-- --------------------------------------------------------

--
-- Structure de la table `geolocalisations`
--

CREATE TABLE `geolocalisations` (
  `id_geo` int(11) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `geolocalisations`
--

INSERT INTO `geolocalisations` (`id_geo`, `adresse`, `latitude`, `longitude`) VALUES
(3, 'Quai Gustave-Ador 82', 46.2103, 6.1695);

-- --------------------------------------------------------

--
-- Structure de la table `questions`
--

CREATE TABLE `questions` (
  `id_ques` int(11) NOT NULL,
  `date` datetime DEFAULT CURRENT_TIMESTAMP,
  `id_uti` int(11) DEFAULT NULL,
  `text` varchar(255) CHARACTER SET keybcs2 COLLATE keybcs2_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `questions`
--

INSERT INTO `questions` (`id_ques`, `date`, `id_uti`, `text`) VALUES
(1, '2018-06-30 19:00:20', 1, 'Ou manger une pizza?'),
(2, '2018-06-30 19:01:08', 2, 'Ou on trouve des meuble de jardin?'),
(3, '2018-06-30 19:02:00', 4, 'Ou acheter des outils de bricolage?');

-- --------------------------------------------------------

--
-- Structure de la table `reponses`
--

CREATE TABLE `reponses` (
  `id_rep` int(11) NOT NULL,
  `text_rep` varchar(255) NOT NULL,
  `date_rep` datetime DEFAULT CURRENT_TIMESTAMP,
  `id_ques` int(11) NOT NULL,
  `id_uti` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `reponses`
--

INSERT INTO `reponses` (`id_rep`, `text_rep`, `date_rep`, `id_ques`, `id_uti`) VALUES
(1, 'Resto la Colombe..', '2018-06-30 19:02:57', 1, 4),
(3, 'Conforama', '2018-06-30 19:04:21', 2, 4),
(4, 'Jumbo', '2018-06-30 19:05:08', 3, 1),
(5, 'Bricoloisir', '2018-06-30 19:05:46', 3, 2);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id_uti` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `login` varchar(255) NOT NULL,
  `pw` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id_uti`, `nom`, `prenom`, `email`, `adresse`, `photo`, `age`, `login`, `pw`) VALUES
(1, 'Gharsellaoui', 'Ala Eddine', 'gh.alaeddine@gmail.com', '4 rue Grange-levrier 1220 Geneve', 'img/ala.png', 27, 'ala', 'admin'),
(2, 'Simao', 'Carole', 'sim2@gmail.ch\r\n', 'rue de l\'ecole 1205 Geneve', 'img/carole.jpg', 29, 'user1', 'user'),
(4, 'Simao', 'Luis', 'luis@mail.ch', 'x Rue XXX xxx', 'img/luis.png', 50, 'luigi', 'papa'),
(5, 'Gharsellaoui', 'Kouraich', 'kou@mail.com', '4 rue la victoire 1250 Genee', 'img/kou.png', 35, 'kour', 'gharsellaoui');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `geolocalisations`
--
ALTER TABLE `geolocalisations`
  ADD PRIMARY KEY (`id_geo`);

--
-- Index pour la table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id_ques`),
  ADD KEY `id_uti` (`id_uti`);

--
-- Index pour la table `reponses`
--
ALTER TABLE `reponses`
  ADD PRIMARY KEY (`id_rep`),
  ADD KEY `id_ques` (`id_ques`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id_uti`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `geolocalisations`
--
ALTER TABLE `geolocalisations`
  MODIFY `id_geo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `questions`
--
ALTER TABLE `questions`
  MODIFY `id_ques` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pour la table `reponses`
--
ALTER TABLE `reponses`
  MODIFY `id_rep` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id_uti` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`id_uti`) REFERENCES `utilisateurs` (`id_uti`) ON DELETE CASCADE;

--
-- Contraintes pour la table `reponses`
--
ALTER TABLE `reponses`
  ADD CONSTRAINT `reponses_ibfk_1` FOREIGN KEY (`id_ques`) REFERENCES `questions` (`id_ques`) ON DELETE CASCADE,
  ADD CONSTRAINT `reponses_ibfk_2` FOREIGN KEY (`id_ques`) REFERENCES `questions` (`id_ques`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
