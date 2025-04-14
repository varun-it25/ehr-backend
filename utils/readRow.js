import { supabase } from '../libs/supabaseClient.js'

export async function readAll(tableName) {
    try {
        const { data: patients, error } = await supabase
            .from(tableName)
            .select('*');

        if (error) {
            throw error;
        }

        console.log(patients);
    } catch (err) {
        console.error('Error fetching patients:', err.message);
    }
}

export async function readOne(tableName, columnName) {
    try {
        const { data: patients, error } = await supabase
            .from(tableName)
            .select(columnName);

        if (error) {
            throw error;
        }

        console.log(patients);
    } catch (err) {
        console.error('Error fetching patients:', err.message);
    }
}

export async function readMany(tableName, columnNames) {
    try {
        const { data: patients, error } = await supabase
            .from(tableName)
            .select(columnNames.join(','));

        if (error) {
            throw error;
        }

        console.log(patients);
    } catch (err) {
        console.error('Error fetching patients:', err.message);
    }
}