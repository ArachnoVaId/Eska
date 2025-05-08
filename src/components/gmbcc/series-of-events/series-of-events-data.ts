import { TabData, TabKey } from "@/types/gmbcc";
import Image1 from "@/assets/gmbcc/image-4.webp";
import Image2 from "@/assets/gmbcc/image-5.webp";
import Image3 from "@/assets/gmbcc/image-6.webp";

export const tabKeys: TabKey[] = ["PRE-EVENTS", "COMPETITION", "SIDE-EVENTS"];

export const tabData: TabData = {
  "PRE-EVENTS": {
    content: `Pre-Event is a new sub-event organized as part of the GMBCC 2024 event series. The Pre-event consists of two events, namely Global Seminar & Masterclass.

The Global Seminar is an international seminar to raise public awareness of business cases and introduce GMBCC.

The Masterclass is a pre-event where participants will be trained to understand about solving a business case and provide business case experience through given mini-case competitions.`,
    image: Image1,
  },
  COMPETITION: {
    content: `The competition consists of three rounds, the preliminary round, the semifinal round, and the final round. 

The Preliminary Round is the first stage where the participants will compile an essay containing the conclusion of the given case. All papers submitted by GMBCC participants will undergo an assessment process of each paper by the judges based on the score matrix and the rules determined by the committee. 

The semi-final round will be conducted with participants presenting the deck of resolution of the case. After that, the five teams with the highest accumulated scores will qualify for the final round. Teams that qualify for the final round will be given a new case (final case) to be analyzed within one week of processing.

The final round consists of a presentation session and an inter-team debate session. The entire GMBCC 2025 series of events will be conducted hybrid using the Zoom Meetings app for online and offline subevents in FEB UGM.`,
    image: Image2,
  },
  "SIDE-EVENTS": {
    content: `The Side Events will consist of 4 events, Exclusive Company Bootcamp, Mentoring, Field Trip, and Awarding Night. Exclusive Company Bootcamp aims to introduce participants to case partner companies and enhance their knowledge of business cases.

Mentoring is an event held for participants who pass the final stage to train the finalists on how to perform a good presentation and practicing it directly in front of experienced mentors. Field Trip aims to give finalist networking session and introduce the culture of Yogyakarta. The Awarding Night is an event where the finalists will get to know each other and enjoy the hard work they have done until the final round.`,
    image: Image3,
  },
};
