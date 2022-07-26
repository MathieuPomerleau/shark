import { Player } from '@prisma/client';
import { Dispatch, SetStateAction } from 'react';

export enum SelectedTab {
    'none',
    'stats',
    'quests',
    'diaries',
    'combatTasks',
    'bosses',
    'clues',
}

export type SkillName =
    | 'attack'
    | 'strength'
    | 'defence'
    | 'ranged'
    | 'prayer'
    | 'magic'
    | 'runecrafting'
    | 'construction'
    | 'hitpoints'
    | 'agility'
    | 'herblore'
    | 'thieving'
    | 'crafting'
    | 'fletching'
    | 'slayer'
    | 'hunter'
    | 'mining'
    | 'smithing'
    | 'fishing'
    | 'cooking'
    | 'firemaking'
    | 'woodcutting'
    | 'farming'
    | 'total';

export type Setter<T> = Dispatch<SetStateAction<T>>;

export type Skill = {
    readonly name: SkillName;
    readonly level: number;
    readonly xp: number;
};

export type SkillRequirement = {
    readonly level: string;
    readonly skill: string;
    readonly boostable: boolean;
};

export type MappedQuest = {
    readonly id: string;
    readonly url: string;
    readonly title: string;
    readonly difficulty: string;
    readonly questPoints: number;
    readonly statReqs: SkillRequirement[];
    readonly questReqs: string[];
    readonly itemReqs: string[];
};
