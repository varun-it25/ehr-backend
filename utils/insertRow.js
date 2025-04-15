import { supabase } from "../libs/supabaseClient.js"

export async function addOne(tableName, inputData) {
    // Input Data = { columnName: columnValue }

    try {
        const { data, error } = await supabase
        .from(tableName)
        .insert([inputData]);
        
        if (error) {
            throw error;
        }
        
        return data;
    } catch (err) {
        console.error('Error adding patient:', err.message);
    }
}

export async function addMany(tableName, inputData) {
    // Input Data = [{ columnName: columnValue }]

    try {
        const { data, error } = await supabase
            .from(tableName)
            .insert(inputData);

        if (error) {
            throw error;
        }

        return data;
    } catch (err) {
        console.error('Error adding patient:', err.message);
    }
}