TIBERIU UIROEAN MONTAGESERVICE – WEBSITE

SCHNELL BEARBEITEN
==================

1. TELEFONNUMMER UND E-MAIL
Öffne index.html in Visual Studio Code und suche ganz unten nach:

const SITE_CONFIG = { ... }

Dort kannst du nur diese drei Werte ändern:
- phoneDisplay = sichtbare Telefonnummer
- phoneHref = Telefonnummer für den Klick-Link im internationalen Format
- email = E-Mail-Adresse

Die Daten werden automatisch in der oberen Kopfzeile und im Kontaktbereich aktualisiert.

2. BILDER ERSETZEN
Im Ordner /images befinden sich drei Dateien:
- hero-montage.jpg       = großes Bild oben auf der Startseite
- arbeit-montage.jpg     = Bild im Unternehmensbereich
- tiberiu-uiorean.jpg    = Porträt im Ansprechpartner-Bereich

Zum Austauschen einfach ein eigenes JPG mit demselben Dateinamen in den images-Ordner kopieren und die vorhandene Datei ersetzen. Die Website passt das Bild automatisch an den vorgesehenen Bereich an.

3. TEXTE / INHALTE ÄNDERN
Texte stehen direkt in index.html. Mit Strg+F nach dem sichtbaren Text suchen, ändern und speichern.

4. FESTES KONTAKT-ICON
Unten rechts befindet sich ein dauerhaft sichtbarer orangefarbener Kontakt-Button. Beim Klicken springt die Seite direkt zum Anfrageformular. Auf Mobilgeräten wird er kompakt als Icon angezeigt.

5. DATEIEN
- index.html = Startseite + eingebettetes Design
- impressum.html = Impressum
- datenschutz.html = Datenschutz
- images/ = austauschbare Bilder

Hinweis: Das Kontaktformular muss beim späteren Hosting technisch an einen Formulardienst/Server angebunden werden. Die aktuelle Version ist für Netlify Forms vorbereitet.
