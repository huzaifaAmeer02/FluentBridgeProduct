import json
import random


# Get recent messages
def get_recent_message():
    # define the fiel name and learn instructions
    file_name = "stored_data.json"
    learn_instruction = {
        "role": "system",
        "content": "You are English teacher for skilled professionals. ask short question that relevent to to this.Your name is Fluentme. The user is called skilledproffession keep the answer to under 30 words. if there any grammer mistakes correct those and teach user to correct those grammer mistake",

    }

    # Initialize messages

    message = []

    # add a random element
    x = random.uniform(0, 1)
    if x < 0.5:
        learn_instruction["content"] = learn_instruction[
                                           "content"] + " your response will include dry humour. if there any grammer mistakes correct those and teach user to correct those grammer mistakes"
    else:
        learn_instruction["content"] = learn_instruction[
                                           "content"] + " your response will include rather chalenging. if there any grammer mistakes correct those and teach user to correct those grammer mistakes"

    # Append instructions to messages
    message.append(learn_instruction)

    # Get last message

    try:
        with open(file_name) as user_file:
            data = json.load(user_file)

            # Append last few data
            if data:
                if len(data) < 5:
                    for item in data:
                        message.append(item)
                    else:
                        for item in data[-5:]:
                            message.append(item)
    except Exception as e:
        print(e)
        pass

    # return
    return message


# store messages

def store_mesages(request_message, response_message):
    # define the fiel name
    file_name = "stored_data.json"

    # get recent messages
    messages = get_recent_message()[1:]

    # add messages to data
    user_messages = {"role": "user", "content": request_message}
    assistant_messages = {"role": "assistant", "content": response_message}
    messages.append(user_messages)
    messages.append(assistant_messages)

    # save the updated file
    with open(file_name, 'w') as f:
        json.dump(messages, f)


# reset messages
def recet_messages():
    # overwrite current file with nothing
    open("stored data.json", "w")
