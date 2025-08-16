# My Finance App

**My Finance App** es una aplicación móvil desarrollada con React Native y Expo para gestionar finanzas personales, permitiendo registrar ingresos y egresos en guaraníes paraguayos (₲). La app cuenta con una interfaz minimalista, persistencia de datos, y paginación para listas de transacciones. Incluye un splash screen personalizado y un ícono único para una experiencia de usuario profesional.

## Características

- **Registro de Ingresos**: Permite registrar ingresos con tipo, monto y fecha.
- **Registro de Egresos**: Registra egresos con tipo, monto, descripción y fecha, actualizando el balance automáticamente.
- **Moneda en Guaraníes**: Los montos se muestran en ₲ sin decimales, usando el formato local de Paraguay (`es-PY`).
- **Paginación**: Muestra 5 transacciones iniciales por lista (ingresos y egresos) con un botón "Cargar más" para scroll adicional.
- **Persistencia de Datos**: Los datos se guardan localmente con `AsyncStorage`, manteniéndose al cerrar y reabrir la app.
- **Splash Screen**: Pantalla inicial personalizada con imágenes para modo claro y oscuro.
- **Ícono Personalizado**: Ícono de la app configurable para iOS y Android (con soporte para íconos adaptativos en Android).

## Requisitos previos

- **Node.js**: Versión 18 o superior.
- **Expo CLI**: Instala globalmente con `npm install -g expo-cli`.
- **EAS CLI**: Para compilaciones, instala con `npm install -g eas-cli`.
- **Java JDK**: Versión 17 para generar keystores (si compilas localmente).
- **Android Studio**: Para compilaciones locales de Android (opcional).
- **Dispositivo o emulador**: Android/iOS para pruebas.
- **Expo Go**: App móvil para pruebas rápidas (opcional).

## Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/fesmpydev/my-finance-app.git

2. Acceder al directorio
   ```bash
      cd my-finance-app

3. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npx expo start
    ```

4.Escanea el código QR con la app Expo Go en tu teléfono Android/iOS.
5. Prueba las funcionalidades (ingresos, egresos, paginación, temas).
