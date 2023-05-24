const getInfoServicios = async (id) => {
    try {
        const respuesta = await fetch('api-data/api.json')
        const respuestaJson = await respuesta.json()

        console.log(respuestaJson.servicios);

        const { createApp } = Vue
        createApp({
            data() {
                return {
                    servicios: respuestaJson.servicios,
                }

            }
        }).mount("#servicios")


    } catch (error) { console.log("Hubo un error", error) }
}


getInfoServicios(3)