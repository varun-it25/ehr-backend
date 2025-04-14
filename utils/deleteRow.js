import { supabase } from "../libs/supabaseClient";

export async function deleteOne(tableName, id) {
    const { data, error } = await supabase
      .from(tableName)
      .delete()
      .eq("id", id);
  
    if (error) {
      console.error("Error deleting row:", error);
    } else {
      console.log("Row deleted:", data);
    }
}

export async function deleteMany(tableName, ids) {
    //ids = [1,2,3,4]
    const { data, error } = await supabase
      .from(tableName)
      .delete()
      .in("id", ids);
  
    if (error) {
      console.error("Error deleting rows:", error);
    } else {
      console.log("Rows deleted:", data);
    }
}