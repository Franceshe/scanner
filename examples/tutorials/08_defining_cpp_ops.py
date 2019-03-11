from scannerpy import Client
from scannerpy.storage import NamedStream, NamedVideoStream

import sys
import os.path
sys.path.append(os.path.dirname(os.path.abspath(__file__)) + '/..')
import util

################################################################################
# This tutorial shows how to write and use your own C++ custom op.             #
################################################################################

def main():
    # Look at resize_op/resize_op.cpp to start this tutorial.

    sc = Client()

    cwd = os.path.dirname(os.path.abspath(__file__))
    if not os.path.isfile(os.path.join(cwd, 'resize_op/build/libresize_op.so')):
        print(
            'You need to build the custom op first: \n'
            '$ pushd {}/resize_op; mkdir build && cd build; cmake ..; make; popd'.
            format(cwd))
        exit()

    # To load a custom op into the Scanner runtime, we use db.load_op to open the
    # shared library we compiled. If the op takes arguments, it also optionally
    # takes a path to the generated python file for the arg protobuf.
    sc.load_op(
        os.path.join(cwd, 'resize_op/build/libresize_op.so'),
        os.path.join(cwd, 'resize_op/build/resize_pb2.py'))

    example_video_path = util.download_video()
    video_stream = NamedVideoStream(sc, 'example', path=example_video_path)
    frame = sc.io.Input([video_stream])

    # Then we use our op just like in the other examples.
    resize = sc.ops.MyResize(frame=frame, width=200, height=300)

    output_stream = NamedVideoStream(sc, 'example_resized')
    output = sc.io.Output(resize, [output_stream])

    sc.run(output)

    video_stream.delete(sc)
    output_stream.delete(sc)

if __name__ == "__main__":
    main()
