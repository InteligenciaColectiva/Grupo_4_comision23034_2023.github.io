const getInfoInicio = async (id) => {
    try {
        const respuesta = await fetch('../api-data/api.json')
        const respuestaJson = await respuesta.json()

        console.log(respuestaJson.inicio);
        console.log(respuestaJson.inicio.nombre);
        console.log(respuestaJson.inicio.descripcion);
        console.log(respuestaJson.inicio.background);
        console.log(respuestaJson.inicio.url);

        const { createApp } = Vue
        createApp({
            data() {
                return {
                    nombre: respuestaJson.inicio.nombre,
                    descripcion: respuestaJson.inicio.descripcion,
                    background: respuestaJson.inicio.background,
                    url: respuestaJson.inicio.url
                }

            }
        }).mount("#hero")


    } catch (error) { console.log("Hubo un error", error) }
}


getInfoInicio(1)