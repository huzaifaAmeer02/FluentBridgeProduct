# noinspection PyInterpreter
from textblob import TextBlob
from language_tool_python import LanguageTool


class SpellCheckerModule:
    def __init__(self):
        self.spell_check = TextBlob("")
        self.grammar_check = LanguageTool('en-US')

    @staticmethod
    def correct_spell(text):
        words = text.split()
        corrected_words = []
        for word in words:
            corrected_word = str(TextBlob(word).correct())
            corrected_words.append(corrected_word)
        return " ".join(corrected_words)

    def correct_grammar(self, text):
        matches = self.grammar_check.check(text)  # analyze the user text for grammatical errors

        found_mistakes = []
        for mistake in matches:
            found_mistakes.append(mistake.message)  # Append mistake description instead of ruleId
        found_mistakes_count = len(found_mistakes)
        return found_mistakes, found_mistakes_count

    # def correct_grammar(self, text):
    #     matches = self.grammar_check.check(text)  # analize the user text / only hte grammertical errors
    #
    #     found_mistakes = []
    #     for mistake in matches:
    #         found_mistakes.append(mistake.ruleId)
    #     found_mistakes_count = len(found_mistakes)
    #     return found_mistakes, found_mistakes_count

    # def correct_grammar(self, text):
    #     matches = self.grammar_check.check(text)  # analyze the user text for grammatical errors
    #
    #     corrected_text = text
    #     for mistake in matches:
    #         start_idx = mistake.offset
    #         end_idx = start_idx + mistake.errorLength
    #         corrected_word = mistake.replacements[0]  # Assuming we take the first replacement
    #         corrected_text = corrected_text[:start_idx] + corrected_word + corrected_text[end_idx:]
    #
    #     return corrected_text


if __name__ == '__main__':
    obj = SpellCheckerModule()
    message = "Hello my namee is John and I am a computerr sciance studant"
    print(obj.correct_spell(message))
    print(obj.correct_grammar(message))
