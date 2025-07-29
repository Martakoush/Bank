'use server'

import { ID } from "node-appwrite"
import { createAdminClient, createSessionClient } from "../appwrite"
import { parseStringify } from "../utils"
import { cookies } from "next/headers"
import path from "path"

export const signIn = async () => {
    try{

    } catch(err){
        console.log(err)
    }
}

export const signUp = async (userData:SignUpParams) => {

    const {email,password,firstName,lastName} = userData

    try{
        const {account} = await createAdminClient()
        
        const newUserAccount = await account.create(ID.unique(),email,password,`${firstName} ${lastName}`)
        
        const session = await account.createEmailPasswordSession(email,password)

        cookies().set('appwrite-session',session.secret,{
            path:'/',
            httpOnly:true,
            sameSite:'strict',
            secure:true,
        })

        return parseStringify(newUserAccount)
    } catch(err){
        console.log(err)
    }
}

export async function getLoggedInUser() {
    try {
        const { account } = await createSessionClient();

        return await account.get()

    } catch (error) {
        console.log(error)
        return null;
    }
}