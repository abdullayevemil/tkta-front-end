"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuSub,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ListItem from "./navigation-link";
import { cn } from "@/lib/utils";
import CallIcon from "@/assets/icons/footer/call.svg";
import { getTranslation } from "@/lib/i18n";

export function Navigation({ locale }: { locale: string }) {
  const t = getTranslation(locale);

  return (
    <nav className="w-full">
      <div className="block flex flex-col lg:flex-row w-full">
        <NavigationMenu className="w-full max-w-full">
          <NavigationMenuList className="w-screen md:w-full flex-col lg:flex-row items-start md:items-center md:justify-evenly">
            <NavigationMenuItem className="ml-1 w-full justify-start">
              <NavigationMenuTrigger className="font-helvetica text-base">
                {t.header.navigation.agency.title}
              </NavigationMenuTrigger>

              <NavigationMenuContent className="left-0 z-50 w-full">
                <ul className="grid w-[200px] md:gap-3 md:p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                  <li>
                    <ListItem
                      href={`/${locale}/agency/about`}
                      title={t.header.navigation.agency.about}
                    >
                      {t.header.navigation.agency.aboutDescription}
                    </ListItem>
                  </li>

                  <li>
                    <ListItem
                      href={`/${locale}/agency/principles`}
                      title={t.header.navigation.agency.principles}
                    >
                      {t.header.navigation.agency.principlesDescription}
                    </ListItem>
                  </li>

                  <li>
                    <ListItem
                      href={`/${locale}/agency/structure`}
                      title={t.header.navigation.agency.structure}
                    >
                      {t.header.navigation.agency.structureDescription}
                    </ListItem>
                  </li>

                  {/* <li>
                    <ListItem
                      href={`/${locale}/agency/inner-quality`}
                      title={
                        t.header.navigation.agency.internalQualityAssurance
                      }
                    >
                      {
                        t.header.navigation.agency
                          .internalQualityAssuranceDescription
                      }
                    </ListItem>
                  </li> */}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="w-full justify-start">
              <NavigationMenuTrigger className="font-helvetica text-base">
                {t.header.navigation.services.title}
              </NavigationMenuTrigger>

              <NavigationMenuContent className="left-0 z-50 w-full">
                <ul className="grid w-[200px] md:gap-3 md:p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                  <li>
                    <ListItem
                      href={`/${locale}/services/qualifications-recognition`}
                      title={
                        t.header.navigation.services
                          .foreignQualificationsRecognition
                      }
                    >
                      {
                        t.header.navigation.services
                          .foreignQualificationsRecognitionDescription
                      }
                    </ListItem>
                  </li>

                  <li>
                    <ListItem
                      href={`/${locale}/services/education-recognition`}
                      title={
                        t.header.navigation.services
                          .nonInformalaeducationRecognition
                      }
                    >
                      {
                        t.header.navigation.services
                          .nonInformalaeducationRecognitionDescription
                      }
                    </ListItem>
                  </li>

                  <li>
                    <ListItem
                      href={`/${locale}/services/accreditation`}
                      title={t.header.navigation.services.accreditation}
                    >
                      {t.header.navigation.services.accreditationDescription}
                    </ListItem>
                  </li>

                  <li>
                    <ListItem
                      href={`/${locale}/services/training-methodology`}
                      title={t.header.navigation.services.training}
                    >
                      {t.header.navigation.services.trainingDescription}
                    </ListItem>
                  </li>

                  <li>
                    <ListItem
                      href={`/${locale}/services/analysis`}
                      title={t.header.navigation.services.analysis}
                    >
                      {t.header.navigation.services.analysisDescription}
                    </ListItem>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="w-full justify-start">
              <NavigationMenuTrigger className="font-helvetica text-base">
                {t.header.navigation.diplomaConfirmation.title}
              </NavigationMenuTrigger>

              <NavigationMenuContent className="left-0 z-50 w-full">
                <ul className="grid w-[200px] md:gap-3 md:p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                  <li>
                    <ListItem
                      href={`/pages/register.html`}
                      title={t.header.navigation.diplomaConfirmation.apply}
                    >
                      {t.header.navigation.diplomaConfirmation.applyDescription}
                    </ListItem>
                  </li>

                  <li>
                    <ListItem
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://apply.enic.edu.az/e-reference/"
                      title={
                        t.header.navigation.diplomaConfirmation.checkDiploma
                      }
                    >
                      {
                        t.header.navigation.diplomaConfirmation
                          .checkDiplomaDescription
                      }
                    </ListItem>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="w-full justify-start">
              <Link
                href={`/${locale}/internationalization`}
                className="font-helvetica text-base"
              >
                {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */}
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "font-helvetica text-base"
                  )}
                >
                  {t.header.navigation.internationalization}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem className="w-full justify-start">
              <NavigationMenuTrigger className="font-helvetica text-base">
                {t.header.navigation.announcements.title}
              </NavigationMenuTrigger>

              <NavigationMenuContent className="left-0 z-50 w-full">
                <ul className="grid w-[200px] md:gap-3 md:p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                  <li>
                    <ListItem
                      href={`/${locale}/announcements/vacancies`}
                      title={t.header.navigation.announcements.vacancies}
                    >
                      {t.header.navigation.announcements.vacanciesDescription}
                    </ListItem>
                  </li>

                  <li>
                    <ListItem
                      href={`/${locale}/announcements/qualification-recognition`}
                      title={
                        t.header.navigation.announcements.documentSubmission
                      }
                    >
                      {
                        t.header.navigation.announcements
                          .documentSubmissionDescription
                      }
                    </ListItem>
                  </li>

                  <li>
                    <ListItem
                      href={`/${locale}/announcements/cooperation`}
                      title={
                        t.header.navigation.announcements
                          .collaborationOpportunities
                      }
                    >
                      {
                        t.header.navigation.announcements
                          .collaborationOpportunitiesDescription
                      }
                    </ListItem>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="w-full justify-start">
              <NavigationMenuTrigger className="font-helvetica text-base">
                {t.header.navigation.reports.title}
              </NavigationMenuTrigger>

              <NavigationMenuContent className="left-0 z-50 w-full">
                <ul className="grid w-[200px] md:gap-3 md:p-4 md:w-[150px] md:grid-cols-1 lg:w-[300px]">
                  <li>
                    <ListItem
                      href={`/${locale}/reports/annual`}
                      title={t.header.navigation.reports.annualReports}
                    >
                      {t.header.navigation.reports.annualReportsDescription}
                    </ListItem>
                  </li>

                  <li>
                    <ListItem
                      href={`/${locale}/reports/financial`}
                      title={t.header.navigation.reports.financialReports}
                    >
                      {t.header.navigation.reports.financialReportsDescription}
                    </ListItem>
                  </li>

                  <li>
                    <ListItem
                      href={`/${locale}/reports/accreditation/monitoring`}
                      title={t.header.navigation.reports.monitoringReports}
                    >
                      {t.header.navigation.reports.monitoringReportsDescription}
                    </ListItem>
                  </li>

                  <NavigationMenuSub defaultValue="sub1" className="w-full">
                    <NavigationMenuList className="w-full">
                      <NavigationMenuItem className="w-full">
                        <NavigationMenuTrigger className="h-fit font-helvetica w-full flex flex-row justify-left p-0 text-left">
                          <ListItem
                            title={
                              t.header.navigation.reports.accreditationReports
                            }
                            className="hover:bg-transparent"
                          >
                            {
                              t.header.navigation.reports
                                .accreditationReportsDescription
                            }
                          </ListItem>
                        </NavigationMenuTrigger>

                        <NavigationMenuContent className="z-50 left-64 top-0">
                          <ul className="grid w-[200px] md:gap-3 md:p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                            <li>
                              <ListItem
                                href={`/${locale}/reports/accreditation/atm`}
                                title={
                                  t.header.navigation.reports
                                    .atmAccreditationReports
                                }
                              ></ListItem>
                            </li>

                            <li>
                              <ListItem
                                href={`/${locale}/reports/accreditation/professional`}
                                title={
                                  t.header.navigation.reports
                                    .professionalEducationReports
                                }
                              ></ListItem>
                            </li>

                            <li>
                              <ListItem
                                href={`/${locale}/reports/accreditation/international`}
                                title={
                                  t.header.navigation.reports
                                    .internationalAccreditationReports
                                }
                              ></ListItem>
                            </li>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenuSub>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="w-full justify-start">
              <NavigationMenuTrigger className="font-helvetica text-base">
                {t.header.navigation.laws.title}
              </NavigationMenuTrigger>

              <NavigationMenuContent className="left-0 z-50 w-full">
                <ul className="grid w-[200px] md:gap-3 md:p-4 md:w-[150px] md:grid-cols-1 lg:w-[300px]">
                  <li>
                    <ListItem
                      href={`/${locale}/legislation/laws`}
                      title={t.header.navigation.laws.laws}
                    ></ListItem>
                  </li>

                  <li>
                    <ListItem
                      href={`/${locale}/legislation/president-requirements`}
                      title={t.header.navigation.laws.prezidentLaws}
                    ></ListItem>
                  </li>

                  <li>
                    <ListItem
                      href={`/${locale}/legislation/cabinet_of_ministers`}
                      title={t.header.navigation.laws.cabinetDecisions}
                    ></ListItem>
                  </li>

                  <li>
                    <ListItem
                      href={`/${locale}/legislation/education`}
                      title={t.header.navigation.laws.ministryDecisions}
                    ></ListItem>
                  </li>

                  {/* <li>
                    <ListItem
                      href={`/${locale}/legislation/others`}
                      title={t.header.navigation.laws.otherLegalActs}
                    ></ListItem>
                  </li> */}

                  <li>
                    <ListItem
                      href={`/${locale}/legislation/accreditation-parameters`}
                      title={t.header.navigation.laws.accreditationCriteria}
                    ></ListItem>
                  </li>

                  <li>
                    <ListItem
                      href={`/${locale}/legislation/accreditation-regulations`}
                      title={t.header.navigation.laws.accreditationRules}
                    ></ListItem>
                  </li>

                  <li>
                    <ListItem
                      href={`/${locale}/legislation/agency-regulations`}
                      title={t.header.navigation.laws.agencyCharter}
                    ></ListItem>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="w-full justify-start">
              <NavigationMenuTrigger className="font-helvetica text-base">
                {t.header.navigation.media.title}
              </NavigationMenuTrigger>

              <NavigationMenuContent className="left-0 z-50 w-full">
                <ul className="grid w-[200px] md:gap-3 md:p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                  <li>
                    <ListItem
                      href={`/${locale}/media/news`}
                      title={t.header.navigation.media.news}
                    >
                      {t.header.navigation.media.newsDescription}
                    </ListItem>
                  </li>

                  <li>
                    <ListItem
                      href={`/${locale}/media/interviews`}
                      title={t.header.navigation.media.interviews}
                    >
                      {t.header.navigation.media.interviewsDescription}
                    </ListItem>
                  </li>

                  <li>
                    <ListItem
                      href={`/${locale}/media/disclosures`}
                      title={t.header.navigation.media.statements}
                    >
                      {t.header.navigation.media.statementsDescription}
                    </ListItem>
                  </li>

                  <li>
                    <ListItem
                      href={`/${locale}/media/multimedia`}
                      title={t.header.navigation.media.multimedia}
                    >
                      {t.header.navigation.media.multimediaDescription}
                    </ListItem>
                  </li>

                  <li>
                    <ListItem
                      href={`/${locale}/media/video-instructions`}
                      title={t.header.navigation.media.videoTutorials}
                    >
                      {t.header.navigation.media.videoTutorialsDescription}
                    </ListItem>
                  </li>

                  <li>
                    <ListItem
                      href={`/${locale}/media/faq`}
                      title={t.header.navigation.media.faq}
                    >
                      {t.header.navigation.media.faqDescription}
                    </ListItem>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="w-full justify-start">
              <Link
                href={`/${locale}/contact`}
                className="font-helvetica text-base"
              >
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "font-helvetica text-base"
                  )}
                >
                  {t.header.navigation.contact.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem className="w-full justify-start">
              <Link
                href={`/${locale}/book-call`}
                className="font-helvetica text-base"
              >
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "font-helvetica text-base"
                  )}
                >
                  {t.header.navigation.videoCall.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem className="w-full justify-start">
              <Link href="tel:146" className="font-helvetica text-base">
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "font-helvetica text-base"
                  )}
                >
                  <div className="flex flex-row justify-between items-center gap-2">
                    <CallIcon
                      width={20}
                      height={20}
                      color="var(--primary-color)"
                    />

                    <span>146-8</span>
                  </div>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
