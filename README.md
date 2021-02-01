# CovidCasesFront

Pull this repository to your computer.

Build docker image: docker build -t covid-cases-front .

Pull back-end from here: https://github.com/kkasputis/CovidCasesBack

Build docker image: docker build -t covid-cases-back .

Run the docker-compose file included with the front-end: docker-compose up --build -d 

Make sure your VM ports 8080 and 4200 are forwarded to localhost.

Open your browser and go to http://localhost:4200

