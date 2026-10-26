#!/bin/bash
# instala LUMIA en Ubuntu (apache + php + mysql)
set -e
# 1. actualiza el sistema e intala los programas
sudo apt update
sudo apt install -y apache2 mysql-server php libapache2-mod-php php-mysql php-mbstring git nodejs npm

# 2. descarga el codigo desde github
cd /var/www/html
sudo git clone https://github.com/edwarts10/lumia-web.git lumia
sudo chown -R www-data:www-data /var/www/html/lumia

# 3. crea la base de datos y sus tablas
sudo mysql < /var/www/html/lumia/datalumia.sql

# 4. compila el modulo comunidad React.
cd /var/www/html/lumia/comunidad-react
sudo npm install
sudo npm run build

# 5. activa y reinicia los servicios
sudo systemctl enable apache2 mysql
sudo systemctl restart apache2 

echo "LUMIA instalado correctamente, accede a http://IP-DEL-SERVIDOR/lumia/"