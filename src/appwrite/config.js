import { use } from "react";
import conf from "../conf/conf";
import {Client ,ID, Databases, Storage} from "appwrite"

export class Service{
    client = new Client();
    databases;
    buket;
    constructor(){
        this.client(
            this.setEndpoint(conf.appwriteUrl),
            this.setProjectId(conf.appwriteProjectId)
        )
        this.databases = new Databases();
        this.buket = new Storage();
    };

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
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
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
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
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
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
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
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
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        }catch(error){
            throw error;
        }
    }

    async uploadFile(File){
        try{
            return await this.buket.createFile(
                conf.appwriteBucketId,
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
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service()
export default service