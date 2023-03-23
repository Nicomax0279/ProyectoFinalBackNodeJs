
import knex from "knex";
import { options } from "./../../config/options.js";

const defaultProducts =[{"title":"Escuadra","price":123.45,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png","id":1},{"title":"Calculadora","price":234.56,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png","id":2},{"title":"Globo Terráqueo","price":345.67,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png","id":3}]
const database = knex(options.sqlite)

const op = async()=>{
    const tableExists = await database.schema.hasTable("products")
    ////create table
    if(tableExists){
       await database.schema.dropTable("products")
    }
   await database.schema.createTable("products",table=>{
        table.increments('id')
        table.string("title",40).nullable(false)
        table.integer("price").nullable(false)
        table.string("thumbnail",200).nullable(false)               




    })
    await database.from("products").insert(defaultProducts)



    database.destroy()

}
op()


