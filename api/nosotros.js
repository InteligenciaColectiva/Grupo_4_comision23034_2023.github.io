const getInfoNosotros = async (id) => {
    try {
        const respuesta = await fetch('../api-data/api.json')
        const respuestaJson = await respuesta.json()

        console.log(respuestaJson.nosotros);
        console.log(respuestaJson.nosotros.descripcion);

        const { createApp } = Vue
        createApp({
            data() {
                return {
                    descripcion: respuestaJson.nosotros.descripcion,
                }

            }
        }).mount("#nosotros")


    } catch (error) { console.log("Hubo un error", error) }
}


getInfoNosotros(2)