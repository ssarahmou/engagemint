from lumibot.brokers import Alpaca
from lumibot.backtesting import YahooDataBacktesting 
from lumibot.strategies.strategy import strategy 
from lumibot.traders import Trader
from datetime import datetime 

API_KEY= ""
API_SECRET= ""
BASE_URL=""

AlPACA_CREDS = {
    "API_KEY": API_KEY, 
    "API_SECRET": API_SECRET, 
    "PAPER": True 
}