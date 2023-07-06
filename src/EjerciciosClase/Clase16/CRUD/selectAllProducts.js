// Elegimos uno de los 2: con este simple cambio logramos que el script apunte a una u otra DB.
//const { options } = require(`../db/mysql`);
const { options } = require(`../db/sqlite`);

const knex = require(`knex`)(options);

; (async () => {
    try {
        const allProducts = await knex
            .from(`products`)
            .select(`*`);

        console.table(allProducts);
    } catch (err) {
        console.log(`Error ${err}`);
    } finally {
        await knex.destroy();
    }
})();
