#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require('fs');
const request = require('request');
const path = require('path');
const ora = require('ora');
const cliSpinners = require('cli-spinners');
clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "versions:",
        choices: [
            {
                name: `v1.1 (stable latest)`,
                value: () => {
                    open('https://github.com/mrepol742/released/blob/stable/Webvium%20VPN%20v1.1.apk?raw=true');
                    console.log("Downloading...\n");
                }
            },
            {
                name: `v1.0`,
                value: () => {
                    open('https://github.com/mrepol742/released/blob/stable/Webvium$20VPN%20v1.0.apk?raw=true');
                    console.log("Downloading...\n");
                }
            },
            {
                name: "\n {exit} \n",
                value: () => {
                    console.log("Thank you for checking our app.\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.blue("             Webvium VPN"),
    handle: chalk.white("@mrepol742"),
    tag: `${chalk.white("Anonymous, Secured, Private and the \nfastest Virtual Private Network.")}`,
    url: `${chalk.grey("https://webvium.github.io/vpn")}`,
    end: `                 ---`
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.tag}`,
        `${data.url}`,
        ``,
        `${data.end}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue"
    }
);

console.log(me);

prompt(questions).then(answer => answer.action());