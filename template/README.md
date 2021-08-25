# Plantilla de inicio de React Admin

## Inicio del proyecto

```bash
npm install
npm start
```

## TODO
1. Cambiar los resources por los que se necesiten en `/src/components/system/app/index.js`

2. Cambiar las traducciones iniciales en `/src/assets/i18n/es.js`

3. Cambiar los colores del theme en `/src/assets/colors/index.js`

4. Sustituir logo en `/src/assets/images/logo.png`

5. Cambiar el title y los recursos por defecto en la carpeta `/public/`

6. Borrar el provider de nest si no se va a usar
    - Elimnar el fichero 
`/src/providers/nestDataProvider.js`
    - Eliminar la dependenncia de npm
        ```bash
        npm remove ra-data-json-server
        ```
    - Descomentar las líneas de `/src/config/admin `para usar el dataprovider que proporciona react admin (o el que necesitemos). El dataprovider oficial [ra-data-simple-rest](
https://github.com/marmelab/react-admin/tree/master/packages/ra-data-simple-rest) está añadido en `/src/providers/dataProvider` .

7. Para activar el login, descomentar el código de `/src/providers/authProvider`. Si es necesario, cambiar la llamada al EP del login en `/src/api/index.js`

8. Variables de entorno (.env)
    - Añadir el fichero `.env.local`
        ```bash 
        REACT_APP_API_BASE_URL=http://localhost:8080
        REACT_APP_API_ENTRYPOINT=/api/admin
        ```

## Documentación
- [React Admin oficial](https://marmelab.com/react-admin/Readme.html)

## Iconos
- [material-ui](https://material-ui.com/es/components/material-icons/)

## Providers
- [Available Providers](https://marmelab.com/react-admin/DataProviders.html)


