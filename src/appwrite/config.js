import { use } from "react";
import conf from "../conf/conf";
import {Client ,ID, Databases, Storage} from "appwrite"

export class Service{
    client = new Client();
    databases;
    buket;
    constructor(){
        this.client(
            this.setEndpoint(conf.app_write_url),
            this.setProjectId(conf.app_write_project_id)
        )
        this.databases = new Databases();
        this.buket = new Storage();
    };

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                conf.app_write_database_id,
                conf.app_write_collection_id,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }catch(error){
            throw error;
        }
    }

    async updatePost(slug, {title, content, featuredImage, status, userId}){
        try{
            return await this.databases.updateDocument(
                conf.app_write_database_id,
                conf.app_write_collection_id,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }catch(error){
            throw error;
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.app_write_database_id,
                conf.app_write_collection_id,
                slug
            )
            return true
        }catch(error){
            throw error;
            return false
        }
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.app_write_database_id,
                conf.app_write_collection_id,
                slug
            )
        }catch(error){
            throw error;
            return false
        }
    }

    async getPosts(queries=[Query.equal("status", "active")]){
        try{
            return await this.databases.listDocuments(
                conf.app_write_database_id,
                conf.app_write_collection_id,
                queries
            )
        }catch(error){
            throw error;
        }
    }

    async uploadFile(File){
        try{
            return await this.buket.createFile(
                conf.app_write_bucket_id,
                ID.unique(),
                File,
            )
        }catch(error){
            throw error;
        }
    }

    async deleteFile(fileId){
        try{

        }catch(error){
            throw error;
        }
    }

    getFilePreview(fileId){
        return this.buket.getFilePreview(
            conf.app_write_bucket_id,
            fileId
        )
    }
}

const service = new Service()
export default service