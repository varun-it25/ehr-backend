import { supabase } from '../libs/supabaseClient.js'

export async function readAll(tableName) {
    try {
        const { data: patients, error } = await supabase
            .from(tableName)
            .select('*');

        if (error) {
            throw error;
        }

        return patients;
    } catch (err) {
        console.error('Error fetching patients:', err.message);
    }
}

export async function readOne(tableName, id) {
    try {
        const { data, error } = await supabase
            .from(tableName)
            .select()
            .eq('id', id)
            .single();

        if (error) throw error;
        return data;
    } catch (err) {
        console.error('Error fetching patient:', err.message);
        throw err;
    }
}

export async function readMany(tableName, ids) {
    try {
        const { data, error } = await supabase
            .from(tableName)
            .select()
            .in('id', ids);

        if (error) throw error;

        return data;
    } catch (err) {
        console.error('Error fetching patients:', err.message);
        throw err;
    }
}