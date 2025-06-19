const conf = {
    app_write_url : String(import.meta.env.VITE_APP_WRITE_URL),
    app_write_project_id : String(import.meta.env.VITE_APP_WRITE_PROJECT_ID),
    app_write_database_id : String(import.meta.env.VITE_APP_WRITE_DATABASE_ID),
    app_write_collection_id : String(import.meta.env.VITE_APP_WRITE_COLLECTION_ID),
    app_write_bucket_id : String(import.meta.env.VITE_APP_WRITE_BUCKET_ID),
}

export default conf