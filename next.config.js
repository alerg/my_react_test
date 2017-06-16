// next.config.js
module.exports = {
    distDir: 'build',
    exportPathMap: function() {
        return {
            "/": { page: "/" },
            "/mi_experiencia_laboral": { page: "/mi_experiencia_laboral" },
            "/mis_datos_personales": { page: "/mis_datos_personales" }
        }
    },
}
