# import installarli con pip + nome o pip + install + nome
import phonenumbers
import pycountry
import requests
from phonenumbers import geocoder
from phonenumbers import carrier
from geoip2.database import Reader

number = "+393428003454"  # Sostituisci con il numero di telefono corretto

parsed_number = phonenumbers.parse(number, "IT")
country_code = phonenumbers.region_code_for_number(parsed_number)

country = pycountry.countries.get(alpha_2=country_code)
country_name = country.name if country else ""

# Ottieni l'indirizzo IP del client che fa la richiesta
# In questo esempio, ip_address sarà un indirizzo IP fittizio, dovrai utilizzare il vero indirizzo IP del client
ip_address = "146.75.186.18"

# Carica il database di geolocalizzazione IP
reader = Reader('C:\\Users\\amaalv\\Desktop\\TestDivertenti\\PhoneTracker\\GeoLite2-City.mmdb')  # Sostituisci con il percorso corretto del tuo database

# Ottieni la posizione geografica associata all'indirizzo IP
response = reader.city(ip_address)

city = response.city.name


print(country_name)
print(carrier.name_for_number(parsed_number, "it"))
print(city)

