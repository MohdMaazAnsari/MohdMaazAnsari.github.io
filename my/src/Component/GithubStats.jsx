// import React from "react"

import {
    Box,
    Text,
    Image,
    VStack,
    Heading
  } from '@chakra-ui/react'





  import React from "react";
import GitHubCalendar from "react-github-calendar";

import "./calender.css";

 

export const GithubStats = () => {
	const selectLast12Months = (contributions) => {
		const today = new Date();
		const startTimestamp = new Date(
			today.getFullYear(),
			today.getMonth() - 11,
			1
		).getTime();
		const endTimestamp =
			new Date(today.getFullYear(), today.getMonth() + 1, 1).getTime() - 1;

		return contributions.filter((day) => {
			const contributionTimestamp = new Date(day.date).getTime();

			return (
				contributionTimestamp >= startTimestamp &&
				contributionTimestamp <= endTimestamp
			);
		});
	};

    return <Box pb = '50px'  >


      <Heading color = 'black' fontSize={35}> <Text as = 'span' color = 'black'>Github</Text> Calender</Heading>


          <VStack mt = '70px'>
          <div className="github-calender">
				<GitHubCalendar
					className="github-calendar-class"
					transformData={selectLast12Months}
					username="MohdMaazAnsari"
					color={"red"}
					blockSize={20}
					fontSize={20}
					showColorLegend
					hideTotalCount
				>
					
				</GitHubCalendar>
			</div>
          </VStack>








{/* -------------------------------- */}
<Heading mt="150px" color = 'black' fontSize={35}> <Text as = 'span' color = 'black'>Github</Text> Stats</Heading>


<VStack>
<div className="github-stats">
				<div id="github-streak">
					<img
						src="https://github-readme-streak-stats.herokuapp.com?user=MohdMaazAnsari&ring=red&currStreakLabel=000000&fire=black&theme=transparent&hide_border=true&stroke=e0eff8"
						alt="Maaz Stats"
						id="github-streak-stats"
					/>
				</div>
				<div id="github-language">
					<img
						src="https://github-readme-stats.vercel.app/api/top-langs/?username=MohdMaazAnsari&layout=compact&langs_count=4&bg_color=e0eff8&hide_border=true"
						alt="Maaz Stats"
						id="github-top-langs"
					/>
				</div>
				<div id="github-streak-status">
					<img
						src="https://github-readme-stats.vercel.app/api?username=MohdMaazAnsari&theme=black&show_icons=true&bg_color=e0eff8&hide_border=true"
						alt="Maaz Stats"
						id="github-stats-card"
					/>
				</div>
			</div>



</VStack>



        </Box>

}