import { supabase } from "../libs/supabaseClient.js";

export async function updateOne(tableName, id, columnName, newData) {
  const { data, error } = await supabase
    .from(tableName)
    .update({ [columnName]: newData })
    .eq('id', id);

  if (error) {
    console.error('Error updating record:', error);
  } else {
    console.log('Record updated:', data);
  }
}

export async function updateMany(tableName, ids, newData) {
  // ids = [1,2,3,4]
  // data = [{name: varun},{name: arun}]

  if (!Array.isArray(ids) || !Array.isArray(newData) || ids.length !== newData.length) {
    throw new Error("Both 'ids' and 'data' must be arrays of equal length.");
  }

  const results = [];

  for (let i = 0; i < ids.length; i++) {
    try {
      const { data, error } = await supabase
        .from(tableName)
        .update(newData[i])
        .eq("id", ids[i])
        .select();

      if (error) {
        console.error(`Error updating id ${ids[i]}:`, error.message);
        results.push({ id: ids[i], error: error.message });
      } else {
        results.push({ id: ids[i], data });
      }
    } catch (err) {
      console.error(`Unexpected error for id ${ids[i]}:`, err.message);
      results.push({ id: ids[i], error: err.message });
    }
  }

  return results;
}