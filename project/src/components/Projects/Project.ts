import gems from '@/app/imgs/Screenshot 2023-07-18 181741.png';
import agence from '@/app/imgs/Agence.png';
import weather from '@/app/imgs/Weather.png';
import store from '@/app/imgs/store.png';

import slding from '@/app/imgs/sliding.jpg';
import memory from '@/app/imgs/memory.png';
import chess from '@/app/imgs/Chess.png';

import clicker from '@/app/imgs/clicker.png';
import dog from '@/app/imgs/dog.png';

import wizard from '@/app/imgs/wizard.png';
import { StaticImageData } from 'next/image';
import cave from '@/app/imgs/cave.png';
import clicker_2 from '@/app/imgs/clicker_2.png';

import bomb from '@/app/imgs/bomb.png';
import tank from '@/app/imgs/tank.png';

import blog from '@/app/imgs/blog.png';

import merge from '@/app/imgs/Merge.png';
import pirate from '@/app/imgs/PirateDuel.png';

interface projects{
    name: string,
    img: StaticImageData,
    url: string
    width: number,
    height: number
}

class project implements projects{
    name: string;
    img: StaticImageData;
    url: string;
    width: number;
    height: number;
    constructor (name: string, img: StaticImageData, url: string, width: number, height: number){
		this.name = name;
		this.img = img;
		this.url = url;
        this.width = width;
        this.height = height;
	}
}

const project_Agence: project = new project("Agency app", agence, "https://github.com/HaddajiDev/Agency_W_React_PostgreSQL", 600, 300);
const project_weather: project = new project("Weather app", weather, "https://github.com/HaddajiDev/Weather_App", 600, 300);
const project_store: project = new project("E-commerce app", store, "https://ecommerce-front-pi-blue.vercel.app/", 600, 300);
const project_blog: project = new project("Savage Blog", blog, "https://savageblog.vercel.app/", 600, 300);

const AllProjects : Array<project> = [project_Agence,project_weather, project_store, project_blog];

const project_gems: project = new project("Gems Rush", gems, "https://play.google.com/store/apps/details?id=com.haddajiDev.pirategemrush", 250, 450);
const project_sliding: project = new project("Sliding puzzle", slding, "https://play.google.com/store/apps/details?id=com.haddajidev.slidingpuzzle", 250, 450);
const project_memory: project = new project("Memory puzzle", memory, "https://haddajidev.itch.io/puzzle-pirates-memory-edition", 250, 450);


const AllGames: Array<project> = [project_gems, project_sliding, project_memory];

const project_chess: project = new project("Chess", chess, "https://haddajidev.itch.io/chess-with-no-checkmate", 600, 300);
const AllGames_2: Array<project> = [project_chess];

const project_clicker: project = new project("Treasure Clicker", clicker, "https://haddajidev.itch.io/treasure-clicker", 600, 300);
const project_dog: project = new project("Dog Rescue", dog, "https://haddajidev.itch.io/dog-rescue", 600, 300);
const AllGames_3: Array<project> = [project_clicker, project_dog];

const project_wizard: project = new project("The Wizard and the...", wizard, "https://haddajidev.itch.io/the-wizard-and-the-warrior-time-keeper", 500, 250);
const project_cave: project = new project("The Cursed Cave", cave, "https://haddajidev.itch.io/the-cursed-cave", 500, 250);
const project_clicker_2: project = new project("رحلة النمو", clicker_2, "https://haddajidev.itch.io/gamejam", 500, 250);
const AllGames_4: Array<project> = [project_wizard, project_cave, project_clicker_2];

const project_bomb: project = new project("Bomb Skipper", bomb, "https://haddajidev.itch.io/bomb-skipper", 600, 300);
const project_tank: project = new project("Tank Showdown", tank, "https://haddajidev.itch.io/tank-showdown", 600, 300);
const AllGames_5 : Array<project> = [project_bomb, project_tank];


const merge_Ball: project = new project("Balls Merge", merge, "https://haddajidev.itch.io/balls-merge", 600, 300);
const Pirate_Duel: project = new project("Pirate's Dual", pirate, "https://haddajidev.itch.io/pirates-dual", 600, 300);
const AllGames_6 : Array<project> = [merge_Ball, Pirate_Duel];
export {AllProjects, AllGames, AllGames_2, AllGames_3, AllGames_4, AllGames_5, AllGames_6};