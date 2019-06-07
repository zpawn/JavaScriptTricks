Docker
===

* `docker build -f ./[Dockerfile.name] -t [tagName] .` - Build docker image
    - `-t` - Name and optionally a tag in the ‘name:tag’ format
    - `-f` - Name of the Dockerfile (Default is ‘PATH/Dockerfile’)
    - `.` - execute context

*  `docker run -p 9000:80 [containerName]` - Run docker container
    - `9000` - outside port
    - `80` - inside port

