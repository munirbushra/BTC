// @see https://docs.aircode.io/guide/functions/
import {db} from 'aircode';

async function getCachedForProvider(providerName:string): Promise<object>{
  return await db.table('cachedOffers')
    .where({provider: providerName})
    .sort({createdAt:-1})
    .findOne();
}

export default async function (params: any, context: any) {
  const providers = ['paybis', 'guardarian', 'transak'];

  const results = await Promise.all([
    getCachedForProvider(providers[0]),
    getCachedForProvider(providers[1]),
    getCachedForProvider(providers[2]),
  ])
  
  return results;
};
