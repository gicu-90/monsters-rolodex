// // function getRandomArbitrary(min, max) {
// //     return Math.floor(Math.random() * (max - min) + min);
// //   }
// // function getRandomFromArr(arr){
// //     return arr[Math.floor(Math.random() * arr.length)];
// // }

// // function create_random() {
// //     var random_property = {};

// //     var  price = getRandomArbitrary(20000, 100000);
// //     var  beds_nr = getRandomArbitrary(1, 5);
// //     var  baths_nr = getRandomArbitrary(1, 5);
// //     var  square = getRandomArbitrary(100, 1000);
    
// //     var  parking_places = getRandomArbitrary(0, 3);

// //     var  property_type = getRandomFromArr(["detached_house", "semi_detached_house", "terraced_house", "end_of_terrace_house", "detached_bungalow", "semi_detached_bungalow", "terrace_bungalow", "end_of_terrace_bungalow", "flat", "retirement", "masonette"])
// //     var  garage_type = getRandomFromArr(["", "", "single", "double", "shared", "offsite"])
// //     var  garden_type = getRandomFromArr(["", "", "front", "back", "patio"])
// //     var  pool_type = getRandomFromArr(["", "", "outdoor", "indoor"])
// //     var  heating_type = getRandomFromArr(["furnace", "bolier", "heat_pump", "hybrid", "lpg", "oil", "gas", "electric", "ground_source", "underfloor", "radiators", "storgage_Heaters", "solar_Panels", "log_fire", "gas_fire", "electric_fire"])
// //     var  broadband_speed_type = getRandomFromArr(["10Mbps", "20Mbps", "30Mbps", "40Mbps", "50Mbps", "60Mbps", "70Mbps", "80Mbps", "90Mbps", "100Mbps", "greater"])
// //     var  energy_efficiency_type = getRandomFromArr(["a", "b", "c", "d", "e", "f", "g" ])

// //     var  retirement_types = getRandomFromArr(["no", "no", "yes", "no"])
// //     var  flat_types = getRandomFromArr(["no_floor", "floor", "floor", "floor"])

// //     var  tenure_type = getRandomFromArr(["freehold", "leasehold"])
// //     var  tenure_leasehold_remaining_years = getRandomArbitrary(1, 20);
// //     var  tenure_leasehold_annual_service_charge = getRandomArbitrary(1200, 6000);

// //     random_property.price = price;
// //     random_property.beds_nr = beds_nr;
// //     random_property.baths_nr = baths_nr;
// //     random_property.square = square;
// //     random_property.property_type = property_type;
// //     random_property.garage_type = garage_type;
// //     random_property.heating_type = heating_type;
// //     random_property.broadband_speed_type = broadband_speed_type;
// //     random_property.energy_efficiency_type = energy_efficiency_type;
// //     random_property.retirement_types = retirement_types;
// //     random_property.flat_types = flat_types;

// //     random_property.tenure_type = tenure_type;
// //     if (tenure_type == "leasehold") {
// //         random_property.tenure_leasehold_remaining_years = tenure_leasehold_remaining_years;
// //         random_property.tenure_leasehold_annual_service_charge = tenure_leasehold_annual_service_charge;
// //     }


// //     if (flat_types !== "floor") {
// //         random_property.garden_type = garden_type;
// //         random_property.pool_type = pool_type;
// //     }

// //     if (garage_type !== "") {
// //         random_property.parking_places = parking_places;
// //     }

// //     return random_property;
// // }

// // var ceva = []
// // for (var x = 0; x<20; x++) {
// //     ceva.push(create_random())
// // }
// // console.log(ceva)

// // x = [
// // {"country": "Moldova", "city": "Javgur", "postal_code": "93904", "address": "04 Dickinson Locks", "lat": "46.5347115", "lon": "28.6185102", "price": 23563, "beds_nr": 4, "baths_nr": 3, "square": 943, "property_type": "masonette", "heating_type": "radiators", "broadband_speed_type": "60Mbps", "energy_efficiency_type": "d", "retirement_types": "no", "flat_types": "floor", "tenure_type": "leasehold", "tenure_leasehold_remaining_years": 6, "tenure_leasehold_annual_service_charge": 1399}
// // {"country": "Moldova", "city": "Chisinau", "postal_code": "MD-2000", "address": "Strada Căpriana 55", "lat": "47.03129056662649", "lon": "28.83344650268555", "price": 81117,"beds_nr": 4,"baths_nr": 4,"square": 657,"property_type": "detached_bungalow","garage_type": "single","heating_type": "electric_fire","broadband_speed_type": "40Mbps","energy_efficiency_type": "b","retirement_types": "no","flat_types": "floor","tenure_type": "leasehold","tenure_leasehold_remaining_years": 19,"tenure_leasehold_annual_service_charge": 4438,"parking_places": 1}
// // {"country": "Moldova", "city": "Chisinau", "postal_code": "MD-2000","address": "Strada Belgrad 133/2", "lat": "46.99003065033704", "lon": "28.864731788635257", "price": 53172,"beds_nr": 4,"baths_nr": 3,"square": 206,"property_type": "semi_detached_house","garage_type": "shared","heating_type": "radiators","broadband_speed_type": "30Mbps","energy_efficiency_type": "c","retirement_types": "no","flat_types": "floor","tenure_type": "leasehold","tenure_leasehold_remaining_years": 6,"tenure_leasehold_annual_service_charge": 5057,"parking_places": 0}
// // {"country": "România", "city": "Iași", "postal_code": "700046", "address": "Strada Profesor Anton Șesan 16", "lat": "47.15712615526791", "lon": "27.592313289642338", "price": 85080,"beds_nr": 4,"baths_nr": 4,"square": 737,"property_type": "terrace_bungalow","heating_type": "bolier","broadband_speed_type": "10Mbps","energy_efficiency_type": "d","retirement_types": "no","flat_types": "floor","tenure_type": "freehold"}
// // {"country": "România", "city": "Iași", "postal_code": "700046", "address": "Șoseaua Națională 78", "lat": "47.16529649029227", "lon": "27.562873363494873", "price": 44428,"beds_nr": 2,"baths_nr": 2,"square": 396,"property_type": "end_of_terrace_house","garage_type": "double","heating_type": "oil","broadband_speed_type": "80Mbps","energy_efficiency_type": "f","retirement_types": "no","flat_types": "floor","tenure_type": "freehold","parking_places": 0}
// // {"country": "România", "city": "București", "postal_code": "020505", "address": "Strada Vasile Lascăr 90", "lat": "44.44309492000845", "lon": "26.11063957214356", "price": 74731,"beds_nr": 1,"baths_nr": 3,"square": 872,"property_type": "end_of_terrace_house","heating_type": "gas_fire","broadband_speed_type": "100Mbps","energy_efficiency_type": "g","retirement_types": "no","flat_types": "no_floor","tenure_type": "freehold","pool_type": ""}
// // {"country": "România", "city": "București", "postal_code": "020505", "address": "Bulevardul Gen. Gheorghe Magheru 12", "lat": "44.442420852661506", "lon": "26.099256277084354", "price": 49347,"beds_nr": 4,"baths_nr": 1,"square": 543,"property_type": "flat","garage_type": "single","heating_type": "lpg","broadband_speed_type": "30Mbps","energy_efficiency_type": "b","retirement_types": "no","flat_types": "floor","tenure_type": "freehold","parking_places": 2}
// // {"country": "România", "city": "București", "postal_code": "030085", "address": "Strada Poștei 2, 03", "lat": "44.431512136223546", "lon": "26.09849452972412", "price": 77359,"beds_nr": 3,"baths_nr": 4,"square": 528,"property_type": "detached_bungalow","garage_type": "offsite","heating_type": "bolier","broadband_speed_type": "20Mbps","energy_efficiency_type": "b","retirement_types": "yes","flat_types": "floor","tenure_type": "leasehold","tenure_leasehold_remaining_years": 13,"tenure_leasehold_annual_service_charge": 3652,"parking_places": 0}
// // {"country": "România", "city": "Brașov", "postal_code": "500030", "address": "Strada Ioan V. Socec 17", "lat": "45.670564276394096", "lon": "25.601813793182377", "price": 37667,"beds_nr": 4,"baths_nr": 1,"square": 528,"property_type": "end_of_terrace_house","garage_type": "single","heating_type": "gas","broadband_speed_type": "20Mbps","energy_efficiency_type": "g","retirement_types": "no","flat_types": "no_floor","tenure_type": "leasehold","tenure_leasehold_remaining_years": 18,"tenure_leasehold_annual_service_charge": 1813,"garden_type": "patio","pool_type": "outdoor","parking_places": 2}
// // {"country": "Germany", "city": "Berlin", "postal_code": "10117", "address": "Reichstagufer 14, 101", "lat": "52.51900208371135", "lon": "13.384426832199098", "price": 92862,"beds_nr": 1,"baths_nr": 3,"square": 662,"property_type": "end_of_terrace_bungalow","heating_type": "gas","broadband_speed_type": "20Mbps","energy_efficiency_type": "f","retirement_types": "yes","flat_types": "floor","tenure_type": "leasehold","tenure_leasehold_remaining_years": 4,"tenure_leasehold_annual_service_charge": 5366}
// // {"country": "Germany", "city": "Berlin", "postal_code": "10585", "address": "Fritschestraße 75", "lat": "52.51392263399709", "lon": "13.299593925476074", "price": 73352,"beds_nr": 2,"baths_nr": 4,"square": 335,"property_type": "end_of_terrace_house","heating_type": "lpg","broadband_speed_type": "greater","energy_efficiency_type": "g","retirement_types": "yes","flat_types": "floor","tenure_type": "leasehold","tenure_leasehold_remaining_years": 16,"tenure_leasehold_annual_service_charge": 1464}
// // {"country": "Germany", "city": "Berlin", "postal_code": "14059", "address": "Pulsstraße 3, 1", "lat": "52.52478593472457", "lon": "13.286054134368898", "price": 49072,"beds_nr": 2,"baths_nr": 3,"square": 394,"property_type": "end_of_terrace_bungalow","garage_type": "double","heating_type": "gas_fire","broadband_speed_type": "30Mbps","energy_efficiency_type": "d","retirement_types": "yes","flat_types": "no_floor","tenure_type": "freehold","garden_type": "front","parking_places": 2}
// // {"country": "Germany", "city": "Berlin", "postal_code": "14050", "address": "Kastanienallee 4", "lat": "52.51786284947856", "lon": "13.271100819110872", "price": 99290,"beds_nr": 1,"baths_nr": 1,"square": 584,"property_type": "terraced_house","garage_type": "double","heating_type": "solar_Panels","broadband_speed_type": "100Mbps","energy_efficiency_type": "d","retirement_types": "no","flat_types": "floor","tenure_type": "freehold","parking_places": 0}
// // {"country": "Germany", "city": "Hannover", "postal_code": "30159", "address": "Sophienstraße 2", "lat": "52.37235037277361", "lon": "9.742491245269777", "price": 72215,"beds_nr": 3,"baths_nr": 4,"square": 918,"property_type": "terraced_house","garage_type": "single","heating_type": "underfloor","broadband_speed_type": "60Mbps","energy_efficiency_type": "e","retirement_types": "no","flat_types": "floor","tenure_type": "leasehold","tenure_leasehold_remaining_years": 6,"tenure_leasehold_annual_service_charge": 5970,"parking_places": 2}
// // {"country": "Germany", "city": "Hannover","postal_code": "30159", "address": "Schmiedestraße 13", "lat": "52.37308399454029", "lon": "9.734208583831789", "price": 60094,"beds_nr": 2,"baths_nr": 4,"square": 921,"property_type": "end_of_terrace_bungalow","garage_type": "double","heating_type": "radiators","broadband_speed_type": "20Mbps","energy_efficiency_type": "g","retirement_types": "no","flat_types": "floor","tenure_type": "freehold","parking_places": 2}
// // {"country": "Germany", "city": "Frankfurt", "postal_code": "60325", "address": "Beethovenstraße 53", "lat": "50.1173310756061", "lon": "8.656175136566164", "price": 49362,"beds_nr": 2,"baths_nr": 2,"square": 952,"property_type": "end_of_terrace_house","heating_type": "electric","broadband_speed_type": "20Mbps","energy_efficiency_type": "f","retirement_types": "no","flat_types": "floor","tenure_type": "freehold"}
// // {"country": "Italia", "city": "Terni", "postal_code": "05100", "address": "Via Augusto Vanzetti, 41A", "lat": "42.56545580065148", "lon": "12.611022591590883", "price": 56448,"beds_nr": 3,"baths_nr": 2,"square": 295,"property_type": "end_of_terrace_bungalow","heating_type": "storgage_Heaters","broadband_speed_type": "greater","energy_efficiency_type": "b","retirement_types": "no","flat_types": "floor","tenure_type": "leasehold","tenure_leasehold_remaining_years": 11,"tenure_leasehold_annual_service_charge": 2731}
// // {"country": "Italia", "city": "Terni", "postal_code": "05100", "address": "Via Fabio Filzi, 8A", "lat": "42.56553481902066", "lon": "12.644882798194885", "price": 99181,"beds_nr": 2,"baths_nr": 4,"square": 757,"property_type": "end_of_terrace_bungalow","heating_type": "lpg","broadband_speed_type": "40Mbps","energy_efficiency_type": "f","retirement_types": "no","flat_types": "no_floor","tenure_type": "freehold","pool_type": "indoor"}
// // {"country": "Italia", "city": "Terni", "postal_code": "05100", "address": "Via Isonzo, 1, 05", "lat": "42.55709509172581", "lon": "12.648509144783022", "price": 40832,"beds_nr": 1,"baths_nr": 3,"square": 625,"property_type": "terraced_house","heating_type": "bolier","broadband_speed_type": "80Mbps","energy_efficiency_type": "f","retirement_types": "no","flat_types": "floor","tenure_type": "leasehold","tenure_leasehold_remaining_years": 2,"tenure_leasehold_annual_service_charge": 5094}
// // {"country": "Italia", "city": "Viterbo", "postal_code": "01100", "address": "Via Guglielmo Marconi, 29", "lat": "42.41993210615798", "lon": "12.106359601020815", "price": 97053,"beds_nr": 2,"baths_nr": 4,"square": 353,"property_type": "detached_house","heating_type": "electric","broadband_speed_type": "20Mbps","energy_efficiency_type": "g","retirement_types": "yes","flat_types": "floor","tenure_type": "freehold"}
// // ]




// // ////////////////////////////////////
// // from pydantic import BaseModel, validator, Field, EmailStr
// // from datetime import date, datetime
// // from typing import List, Optional
// // from enum import Enum
// // from urllib.parse import unquote

// // class EstateBase(BaseModel):
// //     owner_id: Optional[int] = None


// // class GarageTypes(str, Enum):
// //     SINGLE = "single"
// //     DOUBLE = "double"
// //     SHARED = "shared"
// //     OFFSITE = "offsite"

// // class GardenTypes(str, Enum):
// //     FRONT = "front"
// //     BACK = "back"
// //     PATIO = "patio"

// // class TenureTypes(str, Enum):
// //     FREEHOLD = "freehold"
// //     LEASEHOLD = "leasehold"

// // class PoolTypes(str, Enum):
// //     OUTDOOR = "outdoor"
// //     INDOOR = "indoor"

// // class HeatingTypes(str, Enum):
// //     FURNACE = "furnace"
// //     BOLIER = "bolier"
// //     HEAT_PUMP = "heat_pump"
// //     HYBRID = "hybrid" 
// //     LPG = "lpg"
// //     OIL = "oil"
// //     GAS = "gas"
// //     ELECTRIC = "electric"
// //     GROUND_SOURCE = "ground_source"
// //     UNDERFLOOR = "underfloor"
// //     RADIATORS = "radiators"
// //     STORGAGE_HEATERS = "storgage_Heaters"
// //     SOLAR_PANELS = "solar_Panels"
// //     LOG_FIRE = "log_fire"
// //     GAS_FIRE = "gas_fire"
// //     ELECTRIC_FIRE = "electric_fire"

// // class BroadbandSpeedTypes(str, Enum):
// //     TEN = "10Mbps"
// //     TWENTY = "20Mbps"
// //     THERTY = "30Mbps"
// //     FORTY = "40Mbps"
// //     FIFTY = "50Mbps"
// //     SIXTY = "60Mbps"
// //     SEVENTY = "70Mbps"
// //     EITY = "80Mbps"
// //     NINETY = "90Mbps"
// //     ONE_HUNDRED = "100Mbps"
// //     GREATER = "greater"

// // class EnergyEffeciencyRakingTypes(str, Enum):
// //     A = "a"
// //     B = "b"
// //     C = "c"
// //     D = "d"
// //     E = "e"
// //     F = "f"
// //     G = "g"

// // class FlatTypes(str, Enum):
// //     NO_FLOOR = "no_floor"
// //     FLOOR  = "floor"

// // class RetirementTypes(str, Enum):
// //     YES = "yes"
// //     NO = "no"
    
// // class PropertyTypes(str, Enum):
// //     DETACHED_HOUSE = "detached_house"
// //     SEMI_DETACHED_HOUSE = "semi_detached_house"
// //     TERRACED_HOUSE = "terraced_house"
// //     END_OF_TERRACE_HOUSE = "end_of_terrace_house"
// //     DETACHED_BUNGALOW = "detached_bungalow"
// //     SEMI_DETACHED_BUNGALOW = "semi_detached_bungalow"
// //     TERRACE_BUNGALOW = "terrace_bungalow"
// //     END_OF_TERRACE_BUNGALOW = "end_of_terrace_bungalow"
// //     FLAT = "flat"
// //     RETIREMENT = "retirement"
// //     MASONETTE = "masonette"

// // class EstateData(EstateBase):
// //     id: int
// //     owner_id: int 

// //     price: int
// //     beds_nr: int
// //     baths_nr: int
// //     square: float

// //     property_type: PropertyTypes
// //     garage_type: Optional[GarageTypes]
// //     garden_type: Optional[GardenTypes]
// //     parking_places: Optional[int]
// //     pool_type: Optional[PoolTypes]
// //     heating_type: HeatingTypes
// //     broadband_speed_type: Optional[BroadbandSpeedTypes]
// //     energy_efficiency_type: EnergyEffeciencyRakingTypes

// //     retirement_types: RetirementTypes
// //     flat_types: FlatTypes

// //     tenure_type: TenureTypes
// //     tenure_leasehold_remaining_years: Optional[int]
// //     tenure_leasehold_annual_service_charge: Optional[int]

// //     cover_url: str

// //     country: str
// //     city: str
// //     postal_code: str
// //     address: str
// //     lat: float 
// //     lon: float 

// //     approved_on: Optional[datetime]
// //     is_hidden: bool 

// // class EstateEdit(EstateBase):
// //     id: int 
// //     price: Optional[int] = Field(gt=1)
// //     beds_nr: Optional[int] = Field(gt=0)
// //     baths_nr: Optional[int] = Field(gt=0)
// //     square: Optional[float] = Field(gt=0)
    
// //     cover_url: Optional[str] = None

// //     country: Optional[str] = Field(min_length=3)
// //     city: Optional[str] = Field(min_length=3)
// //     postal_code: Optional[str] = Field(min_length=3)
// //     address: Optional[str] = Field(min_length=3)
// //     lat: Optional[float] = Field()
// //     lon: Optional[float] = Field()

// // class PaginationQuery(BaseModel):
// //     quantity: int = Field(default=10 ,gt=0, lt=50)
// //     page: int = Field(default=1, gt=0)

// // class EstatePagination(BaseModel):
// //     total_results: int = 0
// //     total_pages: int = 1
// //     estates: List[EstateData]

// // class ByCountry(BaseModel):
// //     country: str

// // class SearchResponseData(BaseModel):
// //     similar_result: str = None
// //     city: str = None
// //     country: str = None
// //     postal_code: str = None

// // class SearchResponseDataList(BaseModel):
// //     places: List[SearchResponseData] = []
// //     addresses: List[SearchResponseData] = []
 
// // class PriceRange(BaseModel):
// //     price_from: int = Field(0, gt=0)
// //     price_to: int = Field(0, gt=0)

// // class FilterWord(BaseModel):
// //     places: str = None
// //     addresses: str = None

// // class FiltersQuery(BaseModel):
// //     word: Optional[FilterWord]
// //     baths_nr: Optional[List[int]]
// //     beds_nr: Optional[List[int]] 
// //     parking_places: Optional[List[int]]
// //     price_range: Optional[PriceRange]
// //     garage_type: Optional[List[GarageTypes]]
// //     garden_type: Optional[List[GardenTypes]]
// //     tenure: Optional[List[TenureTypes]]
// //     pool_type: Optional[List[PoolTypes]]
// //     heating_type: Optional[List[HeatingTypes]]
// //     broadband_speed_type: Optional[List[BroadbandSpeedTypes]]
// //     energy_efficiency_type: Optional[List[EnergyEffeciencyRakingTypes]]
// //     property_type: Optional[List[PropertyTypes]]

// //     retirement_types: Optional[RetirementTypes]
// //     flat_types: Optional[FlatTypes]
// //     tenure_type: Optional[TenureTypes]

// // class CollateEstates(BaseModel):
// //     pagination: PaginationQuery = None
// //     filters: FiltersQuery = None

// // class GetCollateFilters(FiltersQuery):
// //     def __init__(self, **kwargs):
// //         super().__init__()

// //         self.word = FilterWord()
// //         if kwargs.get("places"):
// //             self.word.places = unquote(kwargs.get("places"))
// //         if kwargs.get("addresses"):
// //             self.word.addresses = unquote(kwargs.get("addresses"))

// //         self.baths_nr = [int(value) for value in kwargs.get("baths_nr").split(",")] if kwargs.get("baths_nr") else None
// //         self.beds_nr = [int(value) for value in kwargs.get("beds_nr").split(",")] if kwargs.get("beds_nr") else None
// //         self.parking_places = [int(value) for value in kwargs.get("parking_places").split(",")] if kwargs.get("parking_places") else None

// //         self.price_range = PriceRange()
// //         if kwargs.get("price_from"):
// //             self.price_range.price_from = int(kwargs.get("price_from"))
            
// //         if kwargs.get("price_to"):
// //             self.price_range.price_to = int(kwargs.get("price_to"))

// //         self.garage_type = kwargs.get("garage_type").split(",") if kwargs.get("garage_type") else None
// //         self.garden_type = kwargs.get("garden_type").split(",") if kwargs.get("garden_type") else None
// //         self.tenure = kwargs.get("tenure").split(",") if kwargs.get("tenure") else None
// //         self.pool_type = kwargs.get("pool_type").split(",") if kwargs.get("pool_type") else None
// //         self.heating_type = kwargs.get("heating_type").split(",") if kwargs.get("heating_type") else None
// //         self.broadband_speed_type = kwargs.get("broadband_speed_type").split(",") if kwargs.get("broadband_speed_type") else None
// //         self.energy_efficiency_type = kwargs.get("energy_efficiency_type").split(",") if kwargs.get("energy_efficiency_type") else None
// //         self.property_type = kwargs.get("property_type").split(",") if kwargs.get("property_type") else None

// //         self.retirement_types = kwargs.get("retirement_types") if kwargs.get("retirement_types") else None
// //         self.flat_types = kwargs.get("flat_types") if kwargs.get("flat_types") else None
// //         self.tenure_type = kwargs.get("tenure_type") if kwargs.get("tenure_type") else None

// // class EstateCreate(EstateBase):
// //     price: int = Field(..., gt=1)
// //     beds_nr: int = Field(..., gt=0)
// //     baths_nr: int = Field(..., gt=0)
// //     square: float = Field(..., gt=0)

// //     property_type: PropertyTypes = Field(...)
// //     garage_type: Optional[GarageTypes] = None
// //     garden_type: Optional[GardenTypes] = None
// //     parking_places: Optional[int] = Field(lt=5)
// //     pool_type: Optional[PoolTypes] = None
// //     heating_type: HeatingTypes = Field(...)
// //     broadband_speed_type: Optional[BroadbandSpeedTypes] = None
// //     energy_efficiency_type: EnergyEffeciencyRakingTypes = Field(...)

// //     retirement_types: RetirementTypes = Field(...)
// //     flat_types: FlatTypes = Field(...)

// //     tenure_type: TenureTypes = Field(...)
// //     tenure_leasehold_remaining_years: Optional[int] = Field( gt=0, lt=100)
// //     tenure_leasehold_annual_service_charge: Optional[int] = Field(gt=0)
    
// //     cover_url: Optional[str] = None
    
// //     country: str = Field(..., min_length=3)
// //     city: str = Field(..., min_length=3)
// //     postal_code: str = Field(..., min_length=3)
// //     address: str = Field(..., min_length=3)
// //     lat: float = Field(...)
// //     lon: float = Field(...)
// // ////////////////////////////////////











// // ////////////////////////////////////
// // from fastapi import Request, APIRouter, HTTPException, Depends, status
// // from ..schemas import *
// // from . import crud
// // from users.schemas import UserData
// // from core import authorize
// // from fastapi import File, Form, UploadFile
// // import json
// // import aiofiles
// // import os
// // import math

// // router = APIRouter(tags=['estates'])


// // @router.get("/api/estates/collate/", response_model=EstatePagination)
// // async def get_estates_collate(request: Request):
// //     query_params_dict = request.query_params.__dict__['_dict']

// //     page = query_params_dict.get("page", 1)
// //     quantity = query_params_dict.get("quantity", 10)

// //     collate_estates = CollateEstates()
// //     collate_estates.pagination = PaginationQuery(
// //         page=page,
// //         quantity=quantity
// //     )

// //     def without_keys(d, ex):
// //         for i in ex:
// //             if i in d:
// //                 d.pop(i)
// //         return d

// //     query_params_dict = without_keys(query_params_dict, ['page', 'quantity'])
// //     try:
// //         collate_estates.filters = GetCollateFilters(**query_params_dict)
// //     except (KeyError, TypeError) as e:
// //         raise HTTPException(status_code=status.HTTP_422_UNPROCESSABLE_ENTITY)

// //     quantity = collate_estates.pagination.quantity
// //     page = collate_estates.pagination.page
// //     from_element: int = (quantity * page) - quantity

// //     db_estates_result = await crud.filter(collate_estates)
// //     total_pages: int = math.ceil(len(db_estates_result) / quantity)
// //     total_results: int = len(db_estates_result)

// //     db_estates_sliced_result = db_estates_result[from_element:from_element + quantity]
// //     estate_data_list = [EstateData(**estate) for estate in db_estates_sliced_result]

// //     return EstatePagination(
// //         total_results=total_results,
// //         total_pages=total_pages,
// //         estates=estate_data_list
// //     )


// // @router.get("/api/estates/{id}", response_model=EstateData)
// // async def read_estate(id: int):
// //     db_estate = await crud.get_estate_by_id(estate_id=id)
// //     if not db_estate:
// //         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)

// //     return EstateData(**db_estate)


// // @router.get("/api/estates/", response_model=SearchResponseDataList)
// // async def estates_try_search(word: str):
// //     search_response_data_list = SearchResponseDataList()

// //     places_results = await crud.search_for_places(word)
// //     addresses_results = await crud.search_for_addresses(word)

// //     if len(places_results) > 4 and len(addresses_results) > 1:
// //         places_results = places_results[:4]
// //         addresses_results = addresses_results[:1]

// //     if len(places_results) < 4:
// //         addresses_results = addresses_results[:5 - len(places_results)]

// //     #   populate places
// //     for estate in places_results:
// //         response_data = SearchResponseData(**estate)

// //         if response_data.country == response_data.similar_result:
// //             response_data.city = None

// //         search_response_data_list.places.append(response_data)

// //     # populate addresses
// //     for estate_data in addresses_results:
// //         search_response_data_list.addresses.append(
// //             SearchResponseData(
// //                 **estate_data,
// //                 similar_result=estate_data['address']
// //             )
// //         )

// //     return search_response_data_list


// // @router.post("/api/estates/", response_model=EstateData)
// // async def create_estate(
// //         estate: str = Form(...),
// //         cover: UploadFile = File(...),
// //         user: UserData = Depends(authorize.get_authorized_active_user)
// // ):
// //     # validate json to model
// //     try:
// //         serialized_data = json.loads(estate)
// //         estate_data = EstateCreate(**serialized_data)
// //     except:
// //         raise HTTPException(status_code=status.HTTP_422_UNPROCESSABLE_ENTITY)

// //     # validate leasehold
// //     if estate_data.tenure_type == TenureTypes.LEASEHOLD:
// //         if not estate_data.tenure_leasehold_remaining_years:
// //             raise HTTPException(status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
// //                 detail="On leasehold must be specified remaining years")

// //     estate_data.owner_id = user.id

// //     created_estate_id = await crud.create_estate(estate=estate_data)
    
// //     # process cover
// //     directory = f'./media/estates/{user.id}/{created_estate_id}'
// //     if not os.path.exists(directory):
// //         os.makedirs(directory)

// //     file_location = f"{directory}/cover.jpg"
// //     async with aiofiles.open(file_location, 'wb') as out_file:
// //         content = await cover.read()  # async read
// //         await out_file.write(content)  # async write

// //     await crud.edit_estate(estate=EstateEdit(
// //         id = created_estate_id,
// //         cover_url = f"/media/estates/{user.id}/{created_estate_id}/cover.jpg"
// //         ))
    
// //     db_estate = await crud.get_estate_by_id(estate_id=created_estate_id)

// //     return EstateData(**db_estate)


// // @router.patch("/api/estates/{id}", response_model=EstateData)
// // async def edit_estate_by_id(
// //         estate: EstateEdit,
// //         cover: UploadFile = File(None),
// //         user: UserData = Depends(authorize.get_authorized_active_user)
// // ):
// //     db_estate = await crud.get_estate_by_id(estate_id=estate.id)
// //     if not db_estate:
// //         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)

// //     estate_data = EstateData(**db_estate)

// //     if (user.id != estate_data.owner_id and
// //             not authorize.get_super_user()):
// //         raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)


// //     if cover:
// //         # process cover
// //         directory = f'./media/estates/{user.id}/{estate.id}'
// //         if not os.path.exists(directory):
// //             os.makedirs(directory)

// //         file_location = f"{directory}/cover.jpg"
// //         async with aiofiles.open(file_location, 'wb') as out_file:
// //             content = await cover.read()  # async read
// //             await out_file.write(content)  # async write

// //         estate.cover_url = f"/media/estates/{user.id}/{estate.id}/cover.jpg"


// //     await crud.edit_estate(estate)

// //     db_estate = await crud.get_estate_by_id(estate_id=estate.id)
// //     return EstateData(**db_estate)


// // @router.delete("/api/estates/{id}")
// // async def delete_estate(
// //         id: int,
// //         user: UserData = Depends(authorize.get_authorized_active_user)
// // ):
// //     db_estate = await crud.get_estate_by_id(estate_id=id)
// //     if not db_estate:
// //         raise HTTPException(status_code=status.HTTP_404_NOT_FOUND)

// //     estate_data = EstateData(**db_estate)
// //     if user.id != estate_data.owner_id:
// //         if not authorize.get_super_user():
// //             raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED)

// //     await crud.delete_estate(id)

// //     return {"detail": "estate {} was successfully deleted".format(id)}
// // ////////////////////////////////////






