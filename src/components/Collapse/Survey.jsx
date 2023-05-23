<SurveyContainer>
    <QuestionTitle>Question {questionNumber}</QuestionTitle>
    {isDataLoading ? (
        <Loader />
    ) : (
        <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
    )}
...
</SurveyContainer>