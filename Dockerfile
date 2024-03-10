FROM openjdk:17
EXPOSE 8082
ADD target/blog.jar blog.jar
ENTRYPOINT ["java", "-jar", "blog.jar"]

