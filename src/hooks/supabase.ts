import { supabase } from "../config"

export const getSelect = async (spot: string) => {
    const { data } = await supabase
        .from('tourspots')
        .select()
        .eq('name', spot)

    return data;
}

export const getInsert = async (spot: string, spots: any[]) => {
    const { error } = await supabase
        .from('tourspots')
        .insert({ name: spot, mapx: spots[0], mapy: spots[1], isspots: spots[2], istravel: spots[3], author: spots[4] })

    return error;
}