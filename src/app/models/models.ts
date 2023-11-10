import { float } from "@zxing/library/esm/customTypings"

export interface IUser {
    mail: string, 
    password: string,
    token: string
}

export interface IProduction {
    product_id: Number, 
    model_id: Number,
    model: String 
    serial: String, 
    checkpoint_id: Number,
    line: String, 
    time: String,
    email: string | null
    role: string | null
    toker: string | null
}

export interface IRemontTypes {
    id: number, 
    defect_name: string,
    line_id: number, 
    name: string
}

export interface ILines {
    id: number, 
    name: string,
}

export interface IRemont {
    id: number
    serial: string
    vaqt: string | Date
    checkpoint: string
    model: string
    defect: string
    error?: any
    photo?: any
}

export interface IComponent {
    code?:string,
    name?:string,
    unit?:string,
    weight?:number;
    type?:string,
    available?: number
}

export interface IGalileo{
    serial?: string
    opcode?: string
    type_freon?:string
    pre_vacuum?: number
    contur_pressure?: number
    vacuum?: number
    poisk_utechek?: number
    real_quantity?: number
    program_quantity?: number
    ref_pressure?: number
    ref_temp?: number
    time?: string
}

export interface IRemontBySerial {
    kiritlgan?: string
    remont_person?: string
    input?: string
    output?: string
    checkpoint?: string
    defect?: string
    status?: number
}

export interface IAllStatistics {
    result: string
    error: string
    data: {
        counters: any[]
        defect_counters: any
        metall_models: any
        sborka_models: any
        ppu_models: any
        agregat_models: any
        freon_models: any
        laboratory_models: any
        packing_models: any

    }
}