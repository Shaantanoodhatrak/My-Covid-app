export class Users
{

     updated : string;
     cases : string;
     todayCases : string;
     deaths : string;
     todayDeaths : string;
     recovered : string;
     todayRecovered : string;
     active : string;
     critical : string;
     casesPerOneMillion : string;
     deathsPerOneMillion : string;
     tests : string;
     testsPerOneMillion : string;
     population : string;
     oneCasePerPeople : string;
     oneDeathPerPeople : string;
     oneTestPerPeople : string;
     undefined : string;
     activePerOneMillion : string;
     recoveredPerOneMillion : string;
     criticalPerOneMillion : string;
     affectedCountries : string;

     constructor(updated, cases, todayCases, deaths, todayDeaths, recovered, todayRecovered, active, critical, casesPerOneMillion, deathsPerOneMillion, tests, testsPerOneMillion, population, oneCasePerPeople, oneDeathPerPeople, oneTestPerPeople, undefined, activePerOneMillion, recoveredPerOneMillion, criticalPerOneMillion, affectedCountries)
     {

      this.updated = updated;
      this.cases = cases;
      this.todayCases = todayCases;
      this.deaths = deaths;
      this.todayDeaths = todayDeaths;
      this.recovered = recovered;
      this.todayRecovered =todayRecovered;
      this.active = active;
      this.critical = critical;
      this.casesPerOneMillion = casesPerOneMillion;
      this.deathsPerOneMillion = deathsPerOneMillion;
      this.tests = tests;
      this.testsPerOneMillion = testsPerOneMillion;
      this.population = population;
      this.oneCasePerPeople = oneCasePerPeople;
      this.oneDeathPerPeople = oneDeathPerPeople;
      this.oneTestPerPeople = oneTestPerPeople;
      this.undefined = undefined;
      this.activePerOneMillion = activePerOneMillion;
      this.recoveredPerOneMillion = recoveredPerOneMillion;
      this.criticalPerOneMillion = criticalPerOneMillion;
      this.affectedCountries = affectedCountries;

     }
}
