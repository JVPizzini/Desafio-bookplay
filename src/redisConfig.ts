import Redis from 'ioredis'
import { promisify } from 'util';

export const redisClient = new Redis();

// codigo foi gerado para conseguir utilizar o async/await, portanto foi atrubuido uma promises a essas funções
export function getRedis(value : string){
  const syncRedisGet = promisify(redisClient.get).bind(redisClient);
  return syncRedisGet(value) 
}
export function setRedis(key:string,value : string){
  const syncRedisGet = promisify(redisClient.set).bind(redisClient);
  return syncRedisGet(key,value) 
}