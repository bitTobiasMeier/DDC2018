FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 20003

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY StorageService/StorageService.csproj StorageService/
RUN dotnet restore StorageService/StorageService.csproj
COPY . .
WORKDIR /src/StorageService
RUN dotnet build StorageService.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish StorageService.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "StorageService.dll"]