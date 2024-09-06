#!/bin/bash

# Mise à jour des packages
sudo apt-get update

# Installation de Java
sudo apt-get install -y openjdk-11-jdk

# Téléchargement de Burp Suite
wget https://portswigger-cdn.net/burp/releases/professional/2024.1.1/burp-suite-professional-2024.1.1.jar -O burpsuite.jar

# Exécution de Burp Suite
java -jar burpsuite.jar
