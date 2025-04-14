import { supabase } from "../libs/supabaseClient.js"

export async function addOne(tableName, inputData) {
    try {
        const { data, error } = await supabase
            .from(tableName)
            .insert([inputData]);

        if (error) {
            throw error;
        }

        console.log('Patient added:', data);
    } catch (err) {
        console.error('Error adding patient:', err.message);
    }
}

export async function addMany(tableName, inputData) {
    try {
        const { data, error } = await supabase
            .from(tableName)
            .insert(inputData);

        if (error) {
            throw error;
        }

        console.log('Patient added:', data);
    } catch (err) {
        console.error('Error adding patient:', err.message);
    }
}