import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetallFAQService {

  constructor() { }

  getallservice(): Array<{}>
  {
    return [
      {
        "question" : "What are serology Tests?",
        // "heading" : "Hello",
        "answer" : "Serology tests detect the presence of antibodies in the blood when the body is responding to a specific infection, like COVID-19. In other words, the tests detect the body's immune response to the infection caused by the virus rather than detecting the virus itself. In the early days of an infection when the body's immune response is still building, antibodies may not be detected. This limits the test effectiveness for diagnosing COVID-19, and this is one reason serology tests should not be used as the sole basis to diagnose COVID-19.",
      },
      {
        "question" : "Should Serology Tests be used of confirm a diagnosis of COVID19 ?",
        // "question" : "nice to meet you",
        "answer" : "No.",
      },
      {
        "question" : "Why use and antibody test for COVID19?",
        // "question" : "that's great",
        "answer" : "The PPV and NPV help those who are interpreting these tests understand, given how prevalent individuals with antibodies are in a population, how likely it is that a person who receives a positive result from a test truly does have antibodies to SARS-CoV-2 and how likely it is that a person who receives a negative result from a test truly does not have antibodies to SARS-CoV-2.",
      },
      {
        "question" : "How do Serology Tests Work?",
        // "question" : "How are you",
        "answer" : "Tests are described by their Positive and Negative Predictive values (PPV and NPV). These measures are calculated using a test's sensitivity, its specificity, and using an assumption about the percentage of individuals in the population who have antibodies to SARS-CoV-2",
      },
      {
        "question" : "What are estimates of senstivity?",
        // "question" : "And you",
        "answer" : "These estimates of sensitivity and specificity are just that: estimates. They include 95% confidence intervals, which are the range of estimates we are about 95% sure a test's sensitivity and specificity will fall within given how many samples were used in the performance validation.",
      },
    ];
  }

  getallsss(): Array<{}>
  {
    return [
      {
        "date": "25-03-2000",
        "caes": "321343"
      },
      {
        "date": "26-03-2000",
        "caes": "321343"
      },
      {
        "date": "27-03-2000",
        "caes": "321343"
      },
      {
        "date": "28-03-2000",
        "caes": "321343"
      },
      {
        "date": "29-03-2000",
        "caes": "32413"
      }
    ]
  }

}
