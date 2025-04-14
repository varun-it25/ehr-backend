import { supabase } from "../libs/supabaseClient";

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

export async function updateMany(tableName, id, newData) {
    //newData = {name: 'Varun', age: 20}
    const { data, error } = await supabase
      .from(tableName)
      .update(newData)
      .eq("id", id);
  
    if (error) {
      console.error("Error updating row:", error);
    } else {
      console.log("Row updated:", data);
    }
}